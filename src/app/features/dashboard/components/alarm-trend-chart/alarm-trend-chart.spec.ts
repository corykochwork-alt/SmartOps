import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { AlarmTrendChart } from './alarm-trend-chart';
import { DashboardStore } from '../../state/dashboard.store';

describe('AlarmTrendChart', () => {
  let component: AlarmTrendChart;
  let fixture: ComponentFixture<AlarmTrendChart>;

  beforeEach(async () => {
    const trendDuration = signal(30);

    await TestBed.configureTestingModule({
      imports: [AlarmTrendChart],
      providers: [
        provideCharts(withDefaultRegisterables()),
        {
          provide: DashboardStore,
          useValue: {
            topAlarmSources: signal([
              { Name: 'Conveyor A-12', Percentage: 42 },
              { Name: 'Robot Cell 5', Percentage: 35 },
              { Name: 'Packaging Line', Percentage: 23 },
            ]),
            totalAlarms: signal([12, 18, 15, 16, 19, 21, 17, 20, 22, 24]),
            criticalAlarms: signal([2, 4, 3, 5, 4, 6, 3, 5, 6, 7]),
            warningAlarms: signal([10, 14, 12, 11, 15, 13, 14, 15, 16, 17]),
            trendDurations: [1, 7, 30, 90],
            trendDuration,
            setTrendDuration: (duration: number) => trendDuration.set(duration),
            isTrendLoading: signal(false),
            trendError: signal(undefined),
            isSourcesLoading: signal(false),
            sourcesError: signal(undefined),
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
    const durationSelect = compiled.querySelector('select') as HTMLSelectElement;
    expect(durationSelect.selectedIndex).toBe(2);
    expect(durationSelect.selectedOptions[0].textContent).toContain('30 days');
  });

  it('should build chart datasets from the dashboard metrics', () => {
    const chartData = component.lineChartData();

    expect(chartData.labels).toEqual(Array.from({ length: 10 }, (_, index) => index + 1));
    expect(chartData.datasets.map((dataset) => dataset.label)).toEqual([
      'Total Alarms',
      'Critical Alarms',
      'Warning Alarms',
    ]);
    expect(chartData.datasets.map((dataset) => dataset.data)).toEqual([
      [12, 18, 15, 16, 19, 21, 17, 20, 22, 24],
      [2, 4, 3, 5, 4, 6, 3, 5, 6, 7],
      [10, 14, 12, 11, 15, 13, 14, 15, 16, 17],
    ]);
  });

  it('should update the chart range when the duration changes', () => {
    component.onDurationChange(7);

    expect(component.selectedDuration()).toBe(7);
    expect(component.lineChartData().labels).toHaveLength(7);
  });
});
