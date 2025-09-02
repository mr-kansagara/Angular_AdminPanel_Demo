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
  },
  {
    path: ENDPOINTS.PRODUCTS.BASE,
    loadChildren: () => import('../features/products/products-module').then((m) => m.ProductsModule),
  },
  {
    path: ENDPOINTS.NGXFLOW.BASE,
    loadChildren: () => import('../features/ngx-flow-demo/ngx-flow-demo.module').then((m) => m.NgxFlowDemoModule),
  },
  {
    path: ENDPOINTS.CUSTOME_NODES.BASE,
    loadChildren: () => import('../features/custome-nodes/custome-nodes.module').then((m) => m.CustomeNodesModule),
  }
];
