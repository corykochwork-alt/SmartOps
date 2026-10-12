import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { provideRouter } from '@angular/router';

import { DashboardStore } from '../../state/dashboard.store';
import { TopAssets } from './top-assets';

describe('TopAssets', () => {
  let fixture: ComponentFixture<TopAssets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopAssets],
      providers: [
        provideRouter([]),
        {
          provide: DashboardStore,
          useValue: {
            topAssets: signal([
              { Name: 'Conveyor A-12', Status: 'Online', Uptime: 99.8, AlarmCount: 2 },
              { Name: 'Packaging Line', Status: 'Maintenance', Uptime: 94.2, AlarmCount: 1 },
            ]),
            isAssetsLoading: signal(false),
            assetsError: signal(undefined),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TopAssets);
    fixture.detectChanges();
  });

  it('renders asset health metrics and status', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.asset').length).toBe(2);
    expect(compiled.textContent).toContain('Conveyor A-12');
    expect(compiled.textContent).toContain('99.8%');
    expect(compiled.textContent).toContain('Maintenance');
  });

  it('renders an empty state', () => {
    const component = fixture.componentInstance;
    (component.assets as ReturnType<typeof signal>).set([]);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('No asset health data is available.');
  });
});
