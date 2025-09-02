import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';
import { ROUTES_ENUMS } from '../../constants/Endpoint.constant';

const routes: Routes = [
  {path : ROUTES_ENUMS.NGXFLOW_PLAYGROUND, component : PlaygroundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxFlowDemoRoutingModule { }
