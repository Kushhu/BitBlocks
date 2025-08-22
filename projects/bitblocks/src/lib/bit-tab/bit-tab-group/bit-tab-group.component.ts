import { AfterContentInit, Component, ContentChildren, effect, model, QueryList } from '@angular/core';
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

  protected activeTab!: BitTabComponent;

  constructor() {
    effect(() => {
      if (!this.tabs.length) return;

      if (this.activeTab) this.activeTab.active = false;
      this.activeTab = this.tabs.get(this.active()) ?? this.tabs.get(0)!;
      if (this.activeTab) this.activeTab.active = true;
    })
  }

  public ngAfterContentInit() {
    this.activeDefaultTab();
  }

  /**
   * abstract method to make tab active
   * @param index of tab
   */
  protected activate(index: number) {
    this.active.set(index);
  }

  /**
   * activate default tab from content list
   * 
   */
  public activeDefaultTab() {
    const defaultTab = this.tabs.get(this.active());

    if (!defaultTab || !this.tabs.length) {
      console.warn("bitTabs : No tab exist at index " + this.active())
      setTimeout(() => { this.active.set(0); });
      return
    };

    defaultTab.active = true;
  }

}
