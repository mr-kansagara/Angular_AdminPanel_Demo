import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomeNodesRoutingModule } from './custome-nodes-routing.module';
import Flow from '@flowjs/flow.js';
import { FlowInjectionToken } from '@flowjs/ngx-flow';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomeNodesRoutingModule,

  ],
    providers: [
    { provide: FlowInjectionToken, useValue: Flow }
  ],
})
export class CustomeNodesModule { }
