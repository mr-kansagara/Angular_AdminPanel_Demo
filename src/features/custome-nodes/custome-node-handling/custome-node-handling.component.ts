import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, inject, TemplateRef, ViewChild } from '@angular/core';
import { NgDocNotifyService } from '@ng-doc/ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeAddChange,
  NodePositionChange,
  NodeSelectedChange,
  Vflow,
} from 'ngx-vflow';
import { MATERIAL_EXPORTS, MATERIAL_IMPORTS } from '../../../shared/imports/material.imports';
import { AuthRoutingModule } from "../../auth/auth-routing-module";
import { MatDialog } from '@angular/material/dialog';
import { NodeDetailsDialogComponent } from '../node-details-dialog/node-details-dialog.component';
import { RightClickDirective } from "../../../shared/directives/right-click.directive";

@Component({
  selector: 'app-custome-node-handling',
  imports: [Vflow, ...MATERIAL_IMPORTS, AuthRoutingModule, RightClickDirective],
  templateUrl: './custome-node-handling.component.html',
  styleUrl: './custome-node-handling.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // standalone: true,
  providers: [NgDocNotifyService, BrowserAnimationsModule],
})
export class CustomeNodeHandlingComponent {

  public nodes: Node[] = [];
  public edges: Edge[] = [];
  public toastData: any = {};
  public dialog = inject(MatDialog);

  constructor() {
    this.loadFromLocalStorage(); // load saved nodes & edges on init
  }

  // 🔹 Save state
  private saveToLocalStorage() {
    localStorage.setItem('nodes', JSON.stringify(this.nodes));
    localStorage.setItem('edges', JSON.stringify(this.edges));
  }

  // 🔹 Load state
  private loadFromLocalStorage() {
    const savedNodes = localStorage.getItem('nodes');
    const savedEdges = localStorage.getItem('edges');

    this.nodes = savedNodes ? JSON.parse(savedNodes) : [];
    this.edges = savedEdges ? JSON.parse(savedEdges) : [];
  }

  public createEdge({ source, target }: Connection) {
    // this.edges = [
    //   ...this.edges,
    //   {
    //     id: `${source} -> ${target}`,
    //     source,
    //     target,
    //     // curve:  'straight' ,
    //     edgeLabels: {
    //       center: {
    //         type: 'html-template',
    //         data: { type: 'delete' },
    //       },
    //     },
    //     type: 'template',
    //     markers: {
    //       end: {
    //         type: 'arrow',
    //       },
    //     },
    //   },
    // ];

    this.edges = [
      ...this.edges,
      {
        id: `${source} -> ${target}`,
        source,
        target,
         //curve:  'straight' ,
        markers: {
          start: {
            type: 'arrow-closed',
          },
          end: {
            type: 'arrow',
          },
        },
        edgeLabels:
        {
          start: {
            type: 'default',
            text: 'Start',
            style: {
              background: '#e3f2fd',
              color: '#1976d2',
              padding: '2px 6px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '500',
            },
          },
          center: {
            type: 'html-template',
            data: {
              color: '#122c26',
              fontColor: 'white',
              padding: '5px',
              border_radius: '50%',
              margin: '0 5px',
              type: 'delete',
            },
          },
          end: {
            type: 'default',
            text: 'End',
            style: {
              background: '#e8f5e8',
              color: '#2e7d32',
              padding: '2px 6px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '500',
            },
          },
          

        },
      },
    ];

    this.saveToLocalStorage();



  }

  public handleNodePositionChange(change: NodePositionChange) {
    console.log("handleNodePositionChange", change);

    const node = this.nodes.find(n => n.id === change.id);
    if (node) {
      node.point.x = change.point.x;
      node.point.y = change.point.y;
    }

    this.toastData = {
      title: '(onNodesChange.position.single)',
      json: JSON.stringify(change, null, 2),
    };


    this.saveToLocalStorage();


  }

  public handleNodeSelectChange(change: NodeSelectedChange) {
    this.toastData = {
      title: '(onNodesChange.select.single)',
      json: JSON.stringify(change, null, 2),
    };
  }

  public handleNodesAddChange(changes: NodeAddChange[]) {
    this.toastData = {
      title: '(onNodesChange.add.many)',
      json: JSON.stringify(changes, null, 2),
    };
  }

  public handleEdgesAddChange(changes: EdgeChange[]) {
    console.log(changes);
    this.toastData = {
      title: '(onEdgesChange.add)',
      json: JSON.stringify(changes, null, 2),
    };
  }

  public addNodes() {
    this.nodes = [
      ...this.nodes,
      {
        id: crypto.randomUUID(),
        point: { x: 70, y: 70 },
        type: 'html-template',
      },
    ];
    this.saveToLocalStorage();
  }

  // public DeleteNode(nodeToDelete: Node) {
  //   console.log(nodeToDelete);
  //   this.nodes = this.nodes.filter((node) => node !== nodeToDelete);
  // }

  public openToast(node: Node) {
    this.dialog.open(NodeDetailsDialogComponent, {
      data: { id: node.id }

    });


  }

  public deleteNode(node: Node) {
    debugger
    console.log(node);
    this.nodes = this.nodes.filter((n) => n.id !== node.id);
    this.saveToLocalStorage();

  }

  public deleteEdge(edge: Edge) {
    debugger
    console.log(edge);
    this.edges = this.edges.filter((e) => e.id !== edge.id);
    this.saveToLocalStorage();

  }

}
