import { AfterContentInit, Component, ContentChildren, model, OnInit, QueryList, signal } from '@angular/core';
import { BitTabComponent } from '../bit-tab/bit-tab.component';

@Component({
  selector: 'bit-tab-group',
  standalone: true,
  imports: [],
  templateUrl: './bit-tab-group.component.html',
  styleUrl: './bit-tab-group.component.css'
})
export class BitTabGroupComponent implements AfterContentInit {

  @ContentChildren(BitTabComponent)
  protected tabs!: QueryList<BitTabComponent>;

  /** active index tab */
  public active = model<number>(0);

  private activeTab = signal<BitTabComponent | null>(null);

  public ngAfterContentInit() {
    this.activeDefaultTab();
  }

  protected activate(tab: BitTabComponent, index: number) {
    this.active.set(index);
    tab.active = true;
    this.activeTab.update((tab) => { if (tab) tab.active = false; return tab; });
    this.activeTab.set(tab);
  }

  public activeDefaultTab() {
    const defaultTab = this.tabs.get(this.active());

    if (!defaultTab) {
      console.warn("bitTabs : No tab exist at index " + this.active())
      setTimeout(() => this.active.set(0));
      return
    };

    this.activeTab.set(defaultTab);
    defaultTab.active = true
  }

}
