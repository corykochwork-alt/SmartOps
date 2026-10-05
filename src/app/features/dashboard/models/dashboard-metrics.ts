import { Kpi } from './kpi';

export interface DashboardMetrics {
  activeAlarms: Kpi;
  assetsOnline: Kpi;
  uptime: Kpi;
  averageResponse: Kpi;
}
