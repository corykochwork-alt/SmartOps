import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { AlarmTrendChart } from './alarm-trend-chart';
import { DashboardApi } from '../../services/dashboard-api';

describe('AlarmTrendChart', () => {
  let component: AlarmTrendChart;
  let fixture: ComponentFixture<AlarmTrendChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlarmTrendChart],
      providers: [
        provideCharts(withDefaultRegisterables()),
        {
          provide: DashboardApi,
          useValue: {
            getTopAlarmSources: {
              value: signal([
                { Name: 'Conveyor A-12', Percentage: 42 },
                { Name: 'Robot Cell 5', Percentage: 35 },
                { Name: 'Packaging Line', Percentage: 23 },
              ]),
            },
            getTotalAlarms: { value: signal([12, 18, 15]) },
            getCriticalAlarms: { value: signal([2, 4, 3]) },
            getWarningAlarms: { value: signal([10, 14, 12]) },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AlarmTrendChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the chart title and alarm sources', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Alarm Trend');
    expect(compiled.querySelectorAll('li').length).toBe(3);
    expect(compiled.textContent).toContain('Conveyor A-12');
    expect(compiled.textContent).toContain('Robot Cell 5');
    expect(compiled.textContent).toContain('Packaging Line');
  });

  it('should build chart datasets from the dashboard metrics', () => {
    const chartData = component.lineChartData();

    expect(chartData.labels).toEqual(Array.from({ length: 30 }, (_, index) => index + 1));
    expect(chartData.datasets.map((dataset) => dataset.label)).toEqual([
      'Total Alarms',
      'Critical Alarms',
      'Warning Alarms',
    ]);
    expect(chartData.datasets.map((dataset) => dataset.data)).toEqual([
      [12, 18, 15],
      [2, 4, 3],
      [10, 14, 12],
    ]);
  });
});
