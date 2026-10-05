import { Component } from '@angular/core';
import { KipCards } from '../../components/kip-cards/kip-cards';
import { DashboardApi } from '../../services/dashboard-api';
import { AlarmTrendChart } from '../../components/alarm-trend-chart/alarm-trend-chart';
import { RecentAlarms } from '../../components/recent-alarms/recent-alarms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [KipCards, AlarmTrendChart, RecentAlarms, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  metrics;

  constructor(private dashboardApi: DashboardApi) {
    this.metrics = dashboardApi.getDashboardMetrics.value;
  }
}
