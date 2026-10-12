import { computed, inject, Injectable, signal } from '@angular/core';

import { DashboardApi } from '../services/dashboard-api';

@Injectable({ providedIn: 'root' })
export class DashboardStore {
	private readonly dashboardApi = inject(DashboardApi);
	readonly trendDurations = [1, 7, 30, 90] as const;
	readonly trendDuration = signal<(typeof this.trendDurations)[number]>(30);

	readonly metrics = this.dashboardApi.getDashboardMetrics.value;
	readonly topAlarmSources = this.dashboardApi.getTopAlarmSources.value;
	readonly recentAlarms = this.dashboardApi.getRecentAlarms.value;
	readonly topAssets = this.dashboardApi.getTopAssets.value;
	readonly totalAlarms = this.dashboardApi.getTotalAlarms.value;
	readonly criticalAlarms = this.dashboardApi.getCriticalAlarms.value;
	readonly warningAlarms = this.dashboardApi.getWarningAlarms.value;

	readonly isLoading = computed(
		() =>
			this.dashboardApi.getDashboardMetrics.isLoading() ||
			this.dashboardApi.getTopAlarmSources.isLoading() ||
			this.dashboardApi.getRecentAlarms.isLoading() ||
			this.dashboardApi.getTopAssets.isLoading() ||
			this.dashboardApi.getTotalAlarms.isLoading() ||
			this.dashboardApi.getCriticalAlarms.isLoading() ||
			this.dashboardApi.getWarningAlarms.isLoading(),
	);

	readonly isTrendLoading = computed(
		() =>
			this.dashboardApi.getTotalAlarms.isLoading() ||
			this.dashboardApi.getCriticalAlarms.isLoading() ||
			this.dashboardApi.getWarningAlarms.isLoading(),
	);

	readonly isSourcesLoading = this.dashboardApi.getTopAlarmSources.isLoading;
	readonly isAssetsLoading = this.dashboardApi.getTopAssets.isLoading;
	readonly trendError = computed(
		() =>
			this.dashboardApi.getTotalAlarms.error() ??
			this.dashboardApi.getCriticalAlarms.error() ??
			this.dashboardApi.getWarningAlarms.error(),
	);
	readonly sourcesError = this.dashboardApi.getTopAlarmSources.error;
	readonly assetsError = this.dashboardApi.getTopAssets.error;

	readonly error = computed(
		() =>
			this.dashboardApi.getDashboardMetrics.error() ??
			this.dashboardApi.getTopAlarmSources.error() ??
			this.dashboardApi.getRecentAlarms.error() ??
			this.dashboardApi.getTopAssets.error() ??
			this.dashboardApi.getTotalAlarms.error() ??
			this.dashboardApi.getCriticalAlarms.error() ??
			this.dashboardApi.getWarningAlarms.error(),
	);

	setTrendDuration(duration: number): void {
		if (this.trendDurations.includes(duration as (typeof this.trendDurations)[number])) {
			this.trendDuration.set(duration as (typeof this.trendDurations)[number]);
		}
	}

	refresh(): void {
		this.dashboardApi.getDashboardMetrics.reload();
		this.dashboardApi.getTopAlarmSources.reload();
		this.dashboardApi.getRecentAlarms.reload();
		this.dashboardApi.getTopAssets.reload();
		this.dashboardApi.getTotalAlarms.reload();
		this.dashboardApi.getCriticalAlarms.reload();
		this.dashboardApi.getWarningAlarms.reload();
	}
}
