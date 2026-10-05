import { DashboardMetrics } from "../models/dashboard-metrics";

export class DashboardData {
    static kpis: DashboardMetrics = {
      activeAlarms: { Name: "Active Alarms", Number: 12 },
      assetsOnline: { Name: "Assets Online", Number: 1428 },
      uptime: { Name: "Uptime", Number: 99.82 },
      averageResponse: { Name: "Avg Response", Number: 3.2 },
    };

    static topAlarmSources = [
            { Name: "Conveyor A-12", Percentage: 20 },
            { Name: "Robot Cell 5", Percentage: 19 },
            { Name: "Packaging Line", Percentage:15 }
    ];

    static alarms = [
        {
            Severity: "Critical",
            AssetName: "Conveyor A-12",
            Message: "Temperature High",
            Time: "12:15 PM",
            Status: "Unacknowledged"
        },
        {
            Severity: "Critical",
            AssetName: "Robot Cell",
            Message: "Offline",
            Time: "11:59 AM",
            Status: "Acknowledged"
        },
        {
            Severity: "Warning",
            AssetName: "Sensor",
            Message: "Drift",
            Time: "11:42 AM",
            Status: "Resolved"
        }
    ];

    static totalAlarm = [
        72, 68, 75, 81, 64, 79, 71, 83, 69, 77,
        74, 85, 66, 80, 78, 88, 67, 76, 73, 82,
        79, 70, 84, 65, 87, 75, 72, 81, 78, 74
    ];

    static criticalAlarms = [
        18, 15, 20, 22, 14, 19, 17, 23, 16, 21,
        18, 24, 15, 22, 20, 26, 14, 19, 18, 23,
        21, 16, 24, 15, 25, 19, 17, 22, 20, 18
    ];

    static warningAlarms = [
        32, 29, 34, 36, 28, 35, 31, 38, 30, 34,
        33, 39, 29, 36, 35, 41, 28, 33, 32, 37,
        35, 30, 38, 27, 40, 34, 31, 36, 35, 32
    ];
}