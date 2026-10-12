import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideCharts } from 'ng2-charts';
import {
  CategoryScale,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';

import { routes } from './app.routes';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideCharts({
      registerables: [
        CategoryScale,
        LinearScale,
        LineController,
        LineElement,
        PointElement,
        Tooltip,
        Legend,
      ],
    }),
    importProvidersFrom(
      InMemoryWebApiModule.forRoot(AppData, { delay: 1000 })
    )
  ],
};
