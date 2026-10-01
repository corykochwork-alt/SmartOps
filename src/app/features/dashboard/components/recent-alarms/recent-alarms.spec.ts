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
