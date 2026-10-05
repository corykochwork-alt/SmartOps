import { Component, computed, inject } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts'
import {
ChartConfiguration,
ChartOptions
} from 'chart.js';
import { DashboardApi } from '../../services/dashboard-api';

@Component({
  selector: 'app-alarm-trend-chart',
  imports: [BaseChartDirective],
  templateUrl: './alarm-trend-chart.html',
  styleUrl: './alarm-trend-chart.css',
})
export class AlarmTrendChart {
  private dashboardApi = inject(DashboardApi);
  alarmSources;

  constructor() {
    this.alarmSources = this.dashboardApi.getTopAlarmSources.value;
  }

// #3B82F6  /* blue */
// #CA8A04  /* yellow */
// #10B981  /* green */
// #EF4444  /* red */
// #8B5CF6  /* purple */
// #F97316  /* orange */

// TODO allow filtering by last 24 hours, last 7 days, last 30 days and last 90 days
  public lineChartData = computed<ChartConfiguration<'line'>['data']>(() => ({
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Total Alarms',
        data: this.dashboardApi.getTotalAlarms.value(),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
        //fill: true
      },
      {
        label: 'Critical Alarms',
        data: this.dashboardApi.getCriticalAlarms.value(),
        borderColor: '#EF4444',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
        //fill: true
      },
      {
        label: 'Warning Alarms',
        data: this.dashboardApi.getWarningAlarms.value(),
        borderColor: '#EAB308',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
        //fill: true
      }
    ]
  }));

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
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
