import { InMemoryDbService, ParsedRequestUrl, RequestInfoUtilities } from 'angular-in-memory-web-api';

import { DashboardData } from './features/dashboard/services/dashboard-data';

// Required class for the In Memory Web API
export class AppData implements InMemoryDbService {

  // Creates the 'in memory' database
  // Can then issue http requests to retrieve this data,
  // just as if the data were located on a backend server
  createDb() {
    const kpis = DashboardData.kpis;
    const topAlarmSources = DashboardData.topAlarmSources;
    const totalAlarms = DashboardData.totalAlarm;
    const criticalAlarms = DashboardData.criticalAlarms;
    const warningAlarms = DashboardData.warningAlarms;
    return {
      kpis,
      'top-alarm-sources': topAlarmSources,
      totalAlarms,
      criticalAlarms,
      warningAlarms,
    };
  }

  // Real routes are namespaced per feature (api/<feature>/<collection>/:id), but the
  // in-memory backend only resolves api/<collection>/:id, so drop the feature segment first.
  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    const withoutFeatureSegment = url.replace(/(^|\/)api\/[^/]+\//, '$1api/');
    return utils.parseRequestUrl(withoutFeatureSegment);
  }
}

