import { Injectable } from '@angular/core';
import { DashboardMetrics } from '../models/dashboard-metrics';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardApi {
  private baseUrl = 'api/dashboard';

  getDashboardMetrics = httpResource<DashboardMetrics>(() => `${this.baseUrl}/kpis`, {
    defaultValue: {
      activeAlarms: { Name: '', Number: 0 },
      assetsOnline: { Name: '', Number: 0 },
      uptime: { Name: '', Number: 0 },
      averageResponse: { Name: '', Number: 0 },
    },
  });

  getTopAlarmSources = httpResource<{ Name: string; Percentage: number }[]>(
    () => `${this.baseUrl}/top-alarm-sources`,
    { defaultValue: [] },
  );

  getTotalAlarms = httpResource<number[]>(
    () => `${this.baseUrl}/totalAlarms`,
    { defaultValue: [] },
  );

  getCriticalAlarms = httpResource<number[]>(
    () => `${this.baseUrl}/criticalAlarms`,
    { defaultValue: [] },
  );

  getWarningAlarms = httpResource<number[]>(
    () => `${this.baseUrl}/warningAlarms`,
    { defaultValue: [] },
  );
}
