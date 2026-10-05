import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { Dashboard } from './dashboard';
import { DashboardApi } from '../../services/dashboard-api';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
      providers: [
        provideCharts(withDefaultRegisterables()),
        provideRouter([]),
        {
          provide: DashboardApi,
          useValue: {
            getDashboardMetrics: {
              value: signal({
                activeAlarms: { Name: 'Active Alarms', Number: 12 },
                assetsOnline: { Name: 'Assets Online', Number: 1428 },
                uptime: { Name: 'Uptime', Number: 99 },
                averageResponse: { Name: 'Average Response', Number: 4 },
              }),
            },
            getTopAlarmSources: { value: signal([]) },
            getTotalAlarms: { value: signal([]) },
            getCriticalAlarms: { value: signal([]) },
            getWarningAlarms: { value: signal([]) },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the KPI cards and chart sections', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('app-kip-cards').length).toBe(4);
    expect(compiled.textContent).toContain('Alarm Trend (Last 30 Days)');
    expect(compiled.textContent).toContain('Recent Critical Events');
  });
});
