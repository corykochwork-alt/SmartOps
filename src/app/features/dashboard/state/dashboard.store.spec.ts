import { signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DashboardApi } from '../services/dashboard-api';
import { DashboardStore } from './dashboard.store';

describe('DashboardStore', () => {
  type TestResource = {
    value: WritableSignal<unknown>;
    isLoading: WritableSignal<boolean>;
    error: WritableSignal<unknown>;
    reload: ReturnType<typeof vi.fn>;
  };

  let store: DashboardStore;
  let resources: {
    metrics: TestResource;
    sources: TestResource;
    recentAlarms: TestResource;
    topAssets: TestResource;
    totalAlarms: TestResource;
    criticalAlarms: TestResource;
    warningAlarms: TestResource;
  };

  beforeEach(() => {
    const createResource = (value: unknown, loading = false, error: unknown = undefined) => {
      const resource = {
        value: signal(value),
        isLoading: signal(loading),
        error: signal(error),
        reload: vi.fn(),
      };

      return resource;
    };

    resources = {
      metrics: createResource({}),
      sources: createResource([]),
      recentAlarms: createResource([]),
      topAssets: createResource([]),
      totalAlarms: createResource([1, 2, 3]),
      criticalAlarms: createResource([1, 1, 1]),
      warningAlarms: createResource([2, 2, 2]),
    };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: DashboardApi,
          useValue: {
            getDashboardMetrics: resources.metrics,
            getTopAlarmSources: resources.sources,
            getRecentAlarms: resources.recentAlarms,
            getTopAssets: resources.topAssets,
            getTotalAlarms: resources.totalAlarms,
            getCriticalAlarms: resources.criticalAlarms,
            getWarningAlarms: resources.warningAlarms,
          },
        },
      ],
    });

    store = TestBed.inject(DashboardStore);
  });

  it('should default to 30 days and accept supported durations', () => {
    expect(store.trendDuration()).toBe(30);

    store.setTrendDuration(7);

    expect(store.trendDuration()).toBe(7);
  });

  it('should ignore unsupported durations', () => {
    store.setTrendDuration(14);

    expect(store.trendDuration()).toBe(30);
  });

  it('should expose aggregate loading and error state', () => {
    resources.totalAlarms.isLoading.set(true);
    resources.criticalAlarms.error.set(new Error('Trend failed'));

    expect(store.isLoading()).toBe(true);
    expect(store.error()?.message).toBe('Trend failed');
    expect(store.isTrendLoading()).toBe(true);
    expect(store.trendError()?.message).toBe('Trend failed');
  });

  it('should refresh every dashboard resource', () => {
    store.refresh();

    for (const resource of Object.values(resources)) {
      expect(resource.reload).toHaveBeenCalledOnce();
    }
  });
});
