import { Injectable } from '@angular/core';
import { DashboardMetrics } from '../models/dashboard-metrics';
import { DashboardAlarm } from '../models/dashboard-alarm';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardApi {
  private readonly baseUrl = 'api/dashboard';
  private readonly requestTimeout = 10_000;

  getDashboardMetrics = httpResource<DashboardMetrics>(
    () => ({ url: `${this.baseUrl}/kpis`, timeout: this.requestTimeout }),
    {
      defaultValue: {
        activeAlarms: { Name: '', Number: 0 },
        assetsOnline: { Name: '', Number: 0 },
        uptime: { Name: '', Number: 0 },
        averageResponse: { Name: '', Number: 0 },
      },
    },
  );

  getTopAlarmSources = httpResource<{ Name: string; Percentage: number }[]>(
    () => ({ url: `${this.baseUrl}/top-alarm-sources`, timeout: this.requestTimeout }),
    { defaultValue: [] },
  );

  getRecentAlarms = httpResource<DashboardAlarm[]>(
    () => ({ url: `${this.baseUrl}/alarms`, timeout: this.requestTimeout }),
    { defaultValue: [] },
  );

  getTotalAlarms = httpResource<number[]>(
    () => ({ url: `${this.baseUrl}/totalAlarms`, timeout: this.requestTimeout }),
    { defaultValue: [] },
  );

  getCriticalAlarms = httpResource<number[]>(
    () => ({ url: `${this.baseUrl}/criticalAlarms`, timeout: this.requestTimeout }),
    { defaultValue: [] },
  );

  getWarningAlarms = httpResource<number[]>(
    () => ({ url: `${this.baseUrl}/warningAlarms`, timeout: this.requestTimeout }),
    { defaultValue: [] },
  );
}
