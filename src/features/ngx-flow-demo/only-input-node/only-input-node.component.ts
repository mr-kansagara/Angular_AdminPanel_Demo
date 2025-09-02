import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomDynamicNodeComponent, Vflow } from 'ngx-vflow';

@Component({
  selector: 'app-only-input-node',
  imports: [Vflow],
  templateUrl: './only-input-node.component.html',
  styleUrl: './only-input-node.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnlyInputNodeComponent extends CustomDynamicNodeComponent {

}
