import { computed, inject, Injectable } from '@angular/core';

import { DashboardApi } from '../services/dashboard-api';

@Injectable({ providedIn: 'root' })
export class DashboardStore {
	private readonly dashboardApi = inject(DashboardApi);

	readonly metrics = this.dashboardApi.getDashboardMetrics.value;
	readonly topAlarmSources = this.dashboardApi.getTopAlarmSources.value;
	readonly totalAlarms = this.dashboardApi.getTotalAlarms.value;
	readonly criticalAlarms = this.dashboardApi.getCriticalAlarms.value;
	readonly warningAlarms = this.dashboardApi.getWarningAlarms.value;

	readonly isLoading = computed(
		() =>
			this.dashboardApi.getDashboardMetrics.isLoading() ||
			this.dashboardApi.getTopAlarmSources.isLoading() ||
			this.dashboardApi.getTotalAlarms.isLoading() ||
			this.dashboardApi.getCriticalAlarms.isLoading() ||
			this.dashboardApi.getWarningAlarms.isLoading(),
	);

	readonly error = computed(
		() =>
			this.dashboardApi.getDashboardMetrics.error() ??
			this.dashboardApi.getTopAlarmSources.error() ??
			this.dashboardApi.getTotalAlarms.error() ??
			this.dashboardApi.getCriticalAlarms.error() ??
			this.dashboardApi.getWarningAlarms.error(),
	);

	refresh(): void {
		this.dashboardApi.getDashboardMetrics.reload();
		this.dashboardApi.getTopAlarmSources.reload();
		this.dashboardApi.getTotalAlarms.reload();
		this.dashboardApi.getCriticalAlarms.reload();
		this.dashboardApi.getWarningAlarms.reload();
	}
}
