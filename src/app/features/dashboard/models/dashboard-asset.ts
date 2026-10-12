export type DashboardAsset = {
  Name: string;
  Status: 'Online' | 'Maintenance' | 'Offline';
  Uptime: number;
  AlarmCount: number;
};
