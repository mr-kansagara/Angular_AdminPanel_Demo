import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomeNodeHandlingComponent } from './custome-node-handling/custome-node-handling.component';
import { ROUTES_ENUMS } from '../../constants/Endpoint.constant';
import { DeleteSelectedComponent } from './delete-selected/delete-selected.component';

const routes: Routes = [

  {path : ROUTES_ENUMS.CUSTOME_NODES, component : CustomeNodeHandlingComponent},
  {path : ROUTES_ENUMS.DELETE_SELECTED, component : DeleteSelectedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomeNodesRoutingModule { }
