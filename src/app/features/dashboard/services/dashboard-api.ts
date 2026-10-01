import { Injectable } from '@angular/core';
import { Kpi } from '../models/kpi';

@Injectable({
  providedIn: 'root',
})
export class DashboardApi {
  getActiveAlarms(): Kpi {
    return {
      Name: "Active Alarms",
      Number: 12
    };
  }

  getAssetsOnline(): Kpi {
    return {
      Name: "Assets Online",
      Number: 1428
    }
  }

  getUptime(): Kpi {
    return {
      Name: "Uptime",
      Number: 99.82 // TODO percent
    }
  }

  getAverageResponse(): Kpi {
    return {
      Name: "Avg Response",
      Number: 3.2 // TODO Min
    }
  }
}
