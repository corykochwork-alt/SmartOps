import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { DashboardStore } from '../../state/dashboard.store';

@Component({
  selector: 'app-recent-alarms',
  imports: [],
  templateUrl: './recent-alarms.html',
  styleUrl: './recent-alarms.css',
})
export class RecentAlarms {
  private readonly dashboardStore = inject(DashboardStore);
  readonly alarms = this.dashboardStore.recentAlarms;
}
