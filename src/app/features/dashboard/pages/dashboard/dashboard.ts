import { Component, inject } from '@angular/core';
import { KipCards } from '../../components/kip-cards/kip-cards';
import { AlarmTrendChart } from '../../components/alarm-trend-chart/alarm-trend-chart';
import { RecentAlarms } from '../../components/recent-alarms/recent-alarms';
import { TopAssets } from '../../components/top-assets/top-assets';
import { RouterLink } from '@angular/router';
import { DashboardStore } from '../../state/dashboard.store';

@Component({
  selector: 'app-dashboard',
  imports: [KipCards, AlarmTrendChart, RecentAlarms, TopAssets, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private readonly dashboardStore = inject(DashboardStore);

  readonly metrics = this.dashboardStore.metrics;
  readonly isLoading = this.dashboardStore.isLoading;
  readonly hasError = this.dashboardStore.error;

  refresh(): void {
    this.dashboardStore.refresh();
  }
}
