import { Component } from '@angular/core';
import { BitTabsModule } from '../../../../projects/bitblocks/src/lib/bit-tab/bit-tab.module';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [BitTabsModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  val = 4
}
