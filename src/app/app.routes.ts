import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { Assets } from './features/assets/pages/assets/assets';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard
    },
    {
        path: '/assets',
        component: Assets
    }
];
