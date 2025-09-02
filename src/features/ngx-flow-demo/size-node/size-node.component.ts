import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CustomDynamicNodeComponent, Vflow } from 'ngx-vflow';
import { PlaygroundService } from '../playground.service';

@Component({
  selector: 'app-size-node',
  imports: [Vflow],
  templateUrl: './size-node.component.html',
  styleUrl: './size-node.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SizeNodeComponent extends CustomDynamicNodeComponent {
  public store = inject(PlaygroundService);

  public connectedNodeWidth = computed(() => {
    const edge =
      this.store.edges().find((edge) => edge.target === this.node().id && edge.targetHandle === 'width') ?? null;
    const sourceNode = edge ? this.store.nodes().find((node) => node.id === edge?.source) : null;

    return Math.floor(sourceNode?.width?.() ?? 0);
  });

  public connectedNodeHeight = computed(() => {
    const edge =
      this.store.edges().find((edge) => edge.target === this.node().id && edge.targetHandle === 'height') ?? null;
    const sourceNode = edge ? this.store.nodes().find((node) => node.id === edge?.source) : null;

    return Math.floor(sourceNode?.height?.() ?? 0);
  });

}
