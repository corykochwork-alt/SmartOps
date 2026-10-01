import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { Dashboard } from './dashboard';
import { DashboardApi } from '../../services/dashboard-api';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
      providers: [DashboardApi, provideCharts(withDefaultRegisterables())],
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
    expect(compiled.textContent).toContain('Active Alarms');
    expect(compiled.textContent).toContain('Assets Online');
    expect(compiled.textContent).toContain('Alarm Trend (Last 30 Days)');
    expect(compiled.textContent).toContain('Recent Critical Events');
  });
});
