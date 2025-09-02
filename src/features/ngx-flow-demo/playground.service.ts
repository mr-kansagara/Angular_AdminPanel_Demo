import { Injectable, signal } from '@angular/core';
import { DynamicNode, Edge } from 'ngx-vflow';
import { ToolbarNodeComponent } from './toolbar-node/toolbar-node.component';
import { ResizableNodeComponent } from './resizable-node/resizable-node.component';
import { SizeNodeComponent } from './size-node/size-node.component';
import { PositionNodeComponent } from './position-node/position-node.component';
import { OnlyInputNodeComponent } from './only-input-node/only-input-node.component';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {

  constructor() { }

   readonly nodes = signal([
    {
      id: '1',
      point: signal({ x: 10, y: 10 }),
      type: 'default',
      text: signal('node 1'),
      width: signal(150),
    },
    {
      id: '2',
      point: signal({ x: 252, y: 200 }),
      type: 'default',
      text: signal('<i>I can show styled text</i>'),
      width: signal(200),
    },
    {  
      id: '3',
      point: signal({ x: 254, y: -181 }),
      type: OnlyInputNodeComponent,
    },
    {
      id: '4',
      point: signal({ x: 465, y: -90 }),
      type: 'default-group',
      width: signal(400),
      height: signal(200),
    },
    {
      id: '5',
      parentId: signal('4'),
      point: signal({ x: 100, y: 50 }),
      type: ToolbarNodeComponent,
    },
    {
      id: '6',
      point: signal({ x: 1056, y: -39 }),
      type: ResizableNodeComponent,
      width: signal(0),
      height: signal(0),
    },
    {
      id: '7',
      point: signal({ x: 1332, y: -181 }),
      type: SizeNodeComponent,
    },
    {
      id: '8',
      point: signal({ x: 1332, y: 200 }),
      type: PositionNodeComponent,
    },
  ] as DynamicNode[]);

  readonly edges = signal([
    {
      id: '1 -> 2',
      source: '1',
      target: '2',
      curve: 'smooth-step',
      edgeLabels: {
        center: {
          type: 'html-template',
          data: {
            type: 'text',
            text: 'Smooth Step Edge',
          },
        },
      },
    },
    {
      id: '1 -> 3',
      source: '1',
      target: '3',
      type: 'template',
      curve: 'bezier',
      edgeLabels: {
        center: {
          type: 'html-template',
          data: {
            type: 'text',
            text: 'Animated Edge',
          },
        },
      },
      data: {
        type: 'animated',
      },
    },
    {
      id: '2 -> 5',
      source: '2',
      target: '5',
    },
    {
      id: '5 -> 6',
      source: '5',
      target: '6',
    },
    {
      id: '6 -> 7width',
      source: '6',
      target: '7',
      targetHandle: 'width',
      edgeLabels: {
        center: {
          type: 'html-template',
          data: {
            type: 'delete',
          },
        },
      },
      markers: {
        end: {
          type: 'arrow-closed',
        },
      },
    },
    {
      id: '6 -> 7height',
      source: '6',
      target: '7',
      targetHandle: 'height',
      edgeLabels: {
        center: {
          type: 'html-template',
          data: {
            type: 'delete',
          },
        },
      },
      markers: {
        end: {
          type: 'arrow-closed',
        },
      },
    },
    {
      id: '6 -> 8x',
      source: '6',
      target: '8',
      targetHandle: 'x',
      edgeLabels: {
        center: {
          type: 'html-template',
          data: {
            type: 'delete',
          },
        },
      },
      markers: {
        end: {
          type: 'arrow-closed',
        },
      },
    },
    {
      id: '6 -> 8y',
      source: '6',
      target: '8',
      targetHandle: 'y',
      edgeLabels: {
        center: {
          type: 'html-template',
          data: {
            type: 'delete',
          },
        },
      },
      markers: {
        end: {
          type: 'arrow-closed',
        },
      }
    },
  ] as Edge[]);




}
