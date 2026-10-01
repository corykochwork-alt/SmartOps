import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAlarms } from './recent-alarms';

describe('RecentAlarms', () => {
  let component: RecentAlarms;
  let fixture: ComponentFixture<RecentAlarms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentAlarms],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentAlarms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
