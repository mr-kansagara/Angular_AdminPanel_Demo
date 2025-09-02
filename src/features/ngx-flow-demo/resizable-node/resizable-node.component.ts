import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomDynamicNodeComponent, Vflow } from 'ngx-vflow';

@Component({
  selector: 'app-resizable-node',
  imports: [Vflow],
  templateUrl: './resizable-node.component.html',
  styleUrl: './resizable-node.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResizableNodeComponent extends CustomDynamicNodeComponent {

}
