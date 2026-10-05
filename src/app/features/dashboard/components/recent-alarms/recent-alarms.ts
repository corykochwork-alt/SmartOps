import { Component } from '@angular/core';
import { DashboardData } from '../../services/dashboard-data';

@Component({
  selector: 'app-recent-alarms',
  imports: [],
  templateUrl: './recent-alarms.html',
  styleUrl: './recent-alarms.css',
})
export class RecentAlarms {
  alarms = DashboardData.alarms;
}
