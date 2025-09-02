import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, untracked, viewChild } from '@angular/core';
import { NgxFlowModule } from '@flowjs/ngx-flow';
import { Vflow, Connection, VflowComponent, Edge } from 'ngx-vflow';
import { PlaygroundService } from '../playground.service';



@Component({
  selector: 'app-playground',
  imports: [CommonModule, NgxFlowModule, VflowComponent, Vflow],
  templateUrl: './playground.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './playground.component.css'
})
export class PlaygroundComponent {

   protected store = inject(PlaygroundService);

  protected vflow = viewChild.required(VflowComponent);

  constructor() {
    effect(
      () => {
        if (this.vflow().initialized()) {
          untracked(() => this.vflow().fitView());
        }
      },
      { allowSignalWrites: true },
    );
  }

  createEdge(connection: Connection) {
    const id = `${connection.source}${connection.sourceHandle ?? ''}-${connection.target}${connection.targetHandle ?? ''}`;

    this.store.edges.update((edges) => {
      return [
        ...edges,
        {
          id,
          edgeLabels: {
            center: {
              type: 'html-template',
              data: {
                type: 'delete',
              },
            },
          },
          ...connection,
        },
      ];
    });
  }

  deleteEdge(edgeToDelete: Edge) {
    this.store.edges.update((edges) => {
      return edges.filter((edge) => edge !== edgeToDelete);
    });
  }


}
