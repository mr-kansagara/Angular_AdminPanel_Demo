import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CustomDynamicNodeComponent, Vflow } from 'ngx-vflow';
import { PlaygroundService } from '../playground.service';

@Component({
  selector: 'app-position-node',
  imports: [Vflow],
  templateUrl: './position-node.component.html',
  styleUrl: './position-node.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PositionNodeComponent extends CustomDynamicNodeComponent {

   public store = inject(PlaygroundService);

  public connectedNodeX = computed(() => {
    const edge = this.store.edges().find((edge) => edge.target === this.node().id && edge.targetHandle === 'x') ?? null;
    const sourceNode = edge ? this.store.nodes().find((node) => node.id === edge?.source) : null;

    return Math.floor(sourceNode?.point().x ?? 0);
  });

  public connectedNodeY = computed(() => {
    const edge = this.store.edges().find((edge) => edge.target === this.node().id && edge.targetHandle === 'y') ?? null;
    const sourceNode = edge ? this.store.nodes().find((node) => node.id === edge?.source) : null;

    return Math.floor(sourceNode?.point().y ?? 0);
  });


}
