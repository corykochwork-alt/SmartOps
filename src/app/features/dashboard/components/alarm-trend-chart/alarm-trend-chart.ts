import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts'
import {
ChartConfiguration,
ChartOptions
} from 'chart.js';
import { DashboardStore } from '../../state/dashboard.store';

@Component({
  selector: 'app-alarm-trend-chart',
  imports: [BaseChartDirective, FormsModule],
  templateUrl: './alarm-trend-chart.html',
  styleUrl: './alarm-trend-chart.css',
})
export class AlarmTrendChart {
  private readonly dashboardStore = inject(DashboardStore);
  readonly alarmSources = this.dashboardStore.topAlarmSources;
  readonly durations = this.dashboardStore.trendDurations;
  readonly selectedDuration = this.dashboardStore.trendDuration;
  readonly isChartLoading = this.dashboardStore.isTrendLoading;
  readonly chartError = this.dashboardStore.trendError;
  readonly isSourcesLoading = this.dashboardStore.isSourcesLoading;
  readonly sourcesError = this.dashboardStore.sourcesError;

// #3B82F6  /* blue */
// #CA8A04  /* yellow */
// #10B981  /* green */
// #EF4444  /* red */
// #8B5CF6  /* purple */
// #F97316  /* orange */

  onDurationChange(duration: number): void {
    this.dashboardStore.setTrendDuration(duration);
  }

  public lineChartData = computed<ChartConfiguration<'line'>['data']>(() => {
    const duration = this.selectedDuration();
    const totalAlarms = this.dashboardStore.totalAlarms().slice(-duration);
    const criticalAlarms = this.dashboardStore.criticalAlarms().slice(-duration);
    const warningAlarms = this.dashboardStore.warningAlarms().slice(-duration);

    return {
      labels: Array.from({ length: totalAlarms.length }, (_, i) => i + 1),
      datasets: [
        {
          label: 'Total Alarms',
          data: totalAlarms,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          tension: 0.4,
        },
        {
          label: 'Critical Alarms',
          data: criticalAlarms,
          borderColor: '#EF4444',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          tension: 0.4,
        },
        {
          label: 'Warning Alarms',
          data: warningAlarms,
          borderColor: '#EAB308',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          tension: 0.4,
        },
      ],
    };
  });

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
}
