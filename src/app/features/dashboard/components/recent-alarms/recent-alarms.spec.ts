import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';

import { RecentAlarms } from './recent-alarms';
import { DashboardStore } from '../../state/dashboard.store';

describe('RecentAlarms', () => {
  let component: RecentAlarms;
  let fixture: ComponentFixture<RecentAlarms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentAlarms],
      providers: [
        {
          provide: DashboardStore,
          useValue: {
            recentAlarms: signal([
              {
                Severity: 'Critical',
                AssetName: 'Conveyor A-12',
                Message: 'Temperature High',
                Time: '12:15 PM',
                Status: 'Unacknowledged',
              },
              {
                Severity: 'Critical',
                AssetName: 'Robot Cell',
                Message: 'Offline',
                Time: '11:59 AM',
                Status: 'Acknowledged',
              },
              {
                Severity: 'Warning',
                AssetName: 'Sensor',
                Message: 'Drift',
                Time: '11:42 AM',
                Status: 'Resolved',
              },
            ]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentAlarms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the latest critical events table', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Recent Critical Events');
    expect(compiled.querySelectorAll('tbody tr').length).toBe(3);
    expect(compiled.textContent).toContain('Temperature High');
    expect(compiled.textContent).toContain('Robot Cell');
    expect(compiled.textContent).toContain('Unacknowledged');
  });
});
