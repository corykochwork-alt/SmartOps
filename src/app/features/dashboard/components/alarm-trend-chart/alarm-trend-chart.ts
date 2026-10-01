import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts'
import {
ChartConfiguration,
ChartOptions
} from 'chart.js';

@Component({
  selector: 'app-alarm-trend-chart',
  imports: [BaseChartDirective],
  templateUrl: './alarm-trend-chart.html',
  styleUrl: './alarm-trend-chart.css',
})
export class AlarmTrendChart {
// #3B82F6  /* blue */
// #CA8A04  /* yellow */
// #10B981  /* green */
// #EF4444  /* red */
// #8B5CF6  /* purple */
// #F97316  /* orange */

// TODO allow filtering by last 24 hours, last 7 days, last 30 days and last 90 days
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Total Alarms',
        data: [
          143, 198, 122, 267, 185, 214, 176, 239, 158, 291,
          204, 137, 248, 163, 279, 195, 221, 146, 302, 187,
          255, 171, 233, 149, 284, 212, 168, 297, 225, 190
        ],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
        //fill: true
      },
      {
        label: 'Critical Alarms',
        data: [
          287, 154, 321, 198, 245, 176, 309, 133, 264, 221,
          185, 342, 167, 298, 213, 357, 144, 276, 190, 325,
          238, 159, 301, 208, 347, 172, 284, 216, 336, 195
        ],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
        //fill: true
      },
      {
        label: 'Warning Alarms',
        data: [
          412, 187, 298, 156, 523, 341, 275, 439, 192, 367,
          481, 224, 315, 178, 554, 392, 261, 447, 203, 329,
          501, 246, 384, 169, 536, 418, 287, 462, 211, 348
        ],
        borderColor: '#EAB308',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
        //fill: true
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
}
