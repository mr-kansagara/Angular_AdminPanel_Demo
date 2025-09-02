import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomDynamicNodeComponent, HandleComponent, NodeToolbarComponent } from 'ngx-vflow';


const emojis = ['🌞', '💡', '💻'];


@Component({
  selector: 'app-toolbar-node',
  imports: [NodeToolbarComponent, HandleComponent],
  templateUrl: './toolbar-node.component.html',
  styleUrl: './toolbar-node.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarNodeComponent extends CustomDynamicNodeComponent {
  public emojis = emojis;
  public emoji = emojis[0];

  selectEmoji(emoji: string) {
    this.emoji = emoji;
  }
}
