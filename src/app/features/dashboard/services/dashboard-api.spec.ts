import { TestBed } from '@angular/core/testing';

import { DashboardApi } from './dashboard-api';

describe('DashboardApi', () => {
  let service: DashboardApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the expected KPI data', () => {
    expect(service.getActiveAlarms()).toEqual({ Name: 'Active Alarms', Number: 12 });
    expect(service.getAssetsOnline()).toEqual({ Name: 'Assets Online', Number: 1428 });
    expect(service.getUptime()).toEqual({ Name: 'Uptime', Number: 99.82 });
    expect(service.getAverageResponse()).toEqual({ Name: 'Avg Response', Number: 3.2 });
  });
});
