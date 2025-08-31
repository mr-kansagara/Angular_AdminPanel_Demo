import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ROUTES_ENUMS } from '../../constants/Endpoint.constant';

const routes: Routes = [
  { path: ROUTES_ENUMS.HOME, component: Home }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
