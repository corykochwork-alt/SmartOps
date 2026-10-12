import { Injectable } from '@angular/core';
import { DashboardMetrics } from '../models/dashboard-metrics';
import { DashboardAlarm } from '../models/dashboard-alarm';
import { DashboardAsset } from '../models/dashboard-asset';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardApi {
  private readonly baseUrl = 'api/dashboard';
  private readonly requestTimeout = 10_000;

  readonly getDashboardMetrics = httpResource<DashboardMetrics>(
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

  readonly getTopAlarmSources = httpResource<{ Name: string; Percentage: number }[]>(
    () => ({ url: `${this.baseUrl}/top-alarm-sources`, timeout: this.requestTimeout }),
    { defaultValue: [] },
  );

  readonly getRecentAlarms = httpResource<DashboardAlarm[]>(
    () => ({ url: `${this.baseUrl}/alarms`, timeout: this.requestTimeout }),
    { defaultValue: [] },
  );

  readonly getTopAssets = httpResource<DashboardAsset[]>(
    () => ({ url: `${this.baseUrl}/top-assets`, timeout: this.requestTimeout }),
    { defaultValue: [] },
  );

  readonly getTotalAlarms = httpResource<number[]>(
    () => ({ url: `${this.baseUrl}/totalAlarms`, timeout: this.requestTimeout }),
    { defaultValue: [] },
  );

  readonly getCriticalAlarms = httpResource<number[]>(
    () => ({ url: `${this.baseUrl}/criticalAlarms`, timeout: this.requestTimeout }),
    { defaultValue: [] },
  );

  readonly getWarningAlarms = httpResource<number[]>(
    () => ({ url: `${this.baseUrl}/warningAlarms`, timeout: this.requestTimeout }),
    { defaultValue: [] },
  );
}
