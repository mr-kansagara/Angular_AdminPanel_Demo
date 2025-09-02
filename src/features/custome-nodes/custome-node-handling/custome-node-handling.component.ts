import { ChangeDetectionStrategy, Component } from '@angular/core';
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
import { MATERIAL_IMPORTS } from '../../../shared/imports/material.imports';

@Component({
  selector: 'app-custome-node-handling',
  imports: [Vflow, ...MATERIAL_IMPORTS],
  templateUrl: './custome-node-handling.component.html',
  styleUrl: './custome-node-handling.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [NgDocNotifyService, BrowserAnimationsModule],
})
export class CustomeNodeHandlingComponent {

  public nodes: Node[] = [];
  public edges: Edge[] = [];
  public toastData: any = {};

  public createEdge({ source, target }: Connection) {
    debugger
    console.log('create edge', source, target);

    this.edges = [
      ...this.edges,
      {
        id: `${source} -> ${target}`,
        source,
        target,
        edgeLabels: {
          center: {
            type: 'html-template',
            data: { type: 'delete' },
          },
        },
        type: 'template',
        markers: {
          end: {
            type: 'arrow',
          },
        },
      },
    ];
  }

  public handleNodePositionChange(change: NodePositionChange) {
    this.toastData = {
      title: '(onNodesChange.position.single)',
      json: JSON.stringify(change, null, 2),
    };
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
        point: { x: 50, y: 50 },
        type: 'html-template',
      },
    ];
  }

  public DeleteNode(nodeToDelete: Node) {
    console.log(nodeToDelete);
    this.nodes = this.nodes.filter((node) => node !== nodeToDelete);
  }

  public openToast(node: Node) {
    alert(
      'toast opened ' +
      node.id +
      ' ' +
      node.type +
      ' ' +
      node.point.x +
      ' ' +
      node.point.y,
    );
  }

  public deleteNode(node: Node) {
    debugger
    console.log(node);
    this.nodes = this.nodes.filter((n) => n.id !== node.id);
  }

  public deleteEdge(edge: Edge) {
    debugger
    console.log(edge);
    this.edges = this.edges.filter((e) => e.id !== edge.id);
  }

  public handleKeyDown(event: KeyboardEvent) {
    debugger
    if (event.key === 'Backspace') {
      const selectedEdge = this.edges.find(e => e.id !== e.id);
      if (selectedEdge) {
        this.deleteEdge(selectedEdge);
        event.preventDefault();
      }
    }
  }





}
