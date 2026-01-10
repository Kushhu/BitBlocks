import { Component } from '@angular/core';
import { BitTabsModule } from 'bitblocks';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [BitTabsModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  val = 1
}
