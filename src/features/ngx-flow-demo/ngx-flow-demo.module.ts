import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxFlowDemoRoutingModule } from './ngx-flow-demo-routing.module';
import { FlowInjectionToken, NgxFlowModule } from '@flowjs/ngx-flow';
import Flow from '@flowjs/flow.js';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxFlowDemoRoutingModule,
    NgxFlowModule  
  ],
  providers: [
    { provide: FlowInjectionToken, useValue: Flow }
  ],
})
export class NgxFlowDemoModule { }
