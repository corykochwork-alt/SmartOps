import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { AlarmTrendChart } from './alarm-trend-chart';

describe('AlarmTrendChart', () => {
  let component: AlarmTrendChart;
  let fixture: ComponentFixture<AlarmTrendChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlarmTrendChart],
      providers: [provideCharts(withDefaultRegisterables())],
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
});
