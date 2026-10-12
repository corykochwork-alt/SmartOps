import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard/dashboard')
          .then(m => m.Dashboard)

    },
    {
        path: 'assets',
        loadComponent: () =>
          import('./features/assets/pages/assets/assets')
          .then(m => m.Assets)
    },
    {
        path: 'alarms',
        loadComponent: () =>
          import('./features/alarms/pages/alarms/alarms')
          .then(m => m.Alarms)
    },
    {
        path: 'admin',
        loadComponent: () =>
          import('./features/admin/pages/admin/admin')
          .then(m => m.Admin)
    },
    {
        path: 'analytics',
        loadComponent: () =>
          import('./features/analytics/pages/analytics/analytics')
          .then(m => m.Analytics)
    },
    {
        path: 'notifications',
        loadComponent: () =>
          import('./features/notifications/pages/notifications/notifications')
          .then(m => m.Notifications)
    },
    {
        path: 'work-orders',
        loadComponent: () =>
          import('./features/work-orders/pages/work-orders/work-orders')
          .then(m => m.WorkOrders)
    }
];
