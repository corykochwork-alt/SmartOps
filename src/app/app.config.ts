import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { routes } from './app.routes';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideCharts(withDefaultRegisterables()),
    importProvidersFrom(
      InMemoryWebApiModule.forRoot(AppData, { delay: 1000 })
    )
  ],
};
