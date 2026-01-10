import { Component } from '@angular/core';
import { BitTabsModule } from 'bitblocks';
import { CodeSnippetComponent } from "@shared/code-snippet/code-snippet.component";
import { TableOfContentComponent } from "@shared/table-of-content/table-of-content.component";

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [BitTabsModule, CodeSnippetComponent, TableOfContentComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  val = 1
}
