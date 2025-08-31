import { Routes } from '@angular/router';
import { ENDPOINTS } from '../constants/Endpoint.constant';

export const routes: Routes = [
  { path: '', redirectTo: ENDPOINTS.AUTH.LOGIN, pathMatch: 'full' },
  {
    path: ENDPOINTS.AUTH.BASE,
    loadChildren: () => import('../features/auth/auth-module').then((m) => m.AuthModule),
  },
  {
    path : ENDPOINTS.DASHBOARD.BASE,
    loadChildren: () => import('../features/dashboard/dashboard-module').then((m) => m.DashboardModule),
  }
];
