import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { Assets } from './features/assets/pages/assets/assets';
import { Alarms } from './features/alarms/pages/alarms/alarms';
import { Admin } from './features/admin/pages/admin/admin';
import { Analytics } from './features/analytics/pages/analytics/analytics';
import { Notifications } from './features/notifications/pages/notifications/notifications';
import { WorkOrders } from './features/work-orders/pages/work-orders/work-orders';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard
    },
    {
        path: 'assets',
        component: Assets
    },
    {
        path: 'alarms',
        component: Alarms
    },
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'analytics',
        component: Analytics
    },
    {
        path: 'notifications',
        component: Notifications
    },
    {
        path: 'work-orders',
        component: WorkOrders
    }
];
