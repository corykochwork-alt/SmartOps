import { Component } from '@angular/core';
import { KipCards } from '../../components/kip-cards/kip-cards';
import { DashboardApi } from '../../services/dashboard-api';
import { Kpi } from '../../models/kpi';
import { AlarmTrendChart } from '../../components/alarm-trend-chart/alarm-trend-chart';
import { RecentAlarms } from '../../components/recent-alarms/recent-alarms';

@Component({
  selector: 'app-dashboard',
  imports: [KipCards, AlarmTrendChart, RecentAlarms],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  activeAlarms: Kpi;
  assetsOnline: Kpi;
  uptime: Kpi;
  averageResponse: Kpi;

  constructor(private dashboardApi: DashboardApi) {
    this.activeAlarms = dashboardApi.getActiveAlarms();
    this.assetsOnline = dashboardApi.getAssetsOnline();
    this.uptime = dashboardApi.getUptime();
    this.averageResponse = dashboardApi.getAverageResponse();
  }
}
