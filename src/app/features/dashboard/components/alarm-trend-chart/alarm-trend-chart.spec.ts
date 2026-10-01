import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmTrendChart } from './alarm-trend-chart';

describe('AlarmTrendChart', () => {
  let component: AlarmTrendChart;
  let fixture: ComponentFixture<AlarmTrendChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlarmTrendChart],
    }).compileComponents();

    fixture = TestBed.createComponent(AlarmTrendChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
