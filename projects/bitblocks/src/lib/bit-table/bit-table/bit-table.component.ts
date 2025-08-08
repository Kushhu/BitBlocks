import { CommonModule, KeyValue, KeyValuePipe } from '@angular/common';
import { AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, input, Input, Output, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BitTableRowComponent } from '../bit-table.module';

@Component({
  selector: 'bit-table',
  standalone: true,
  imports: [KeyValuePipe, CommonModule,],
  templateUrl: './bit-table.component.html',
  styleUrl: './bit-table.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BitTableComponent<TList> implements AfterContentInit {

  /**
   * A root level data wrapper which includes all records 
   * 
   */
  data = input<TList[]>();
  contentRows: any[] = [];

  @Input() showTotalRecords?: boolean;
  @Input() columns?: (keyof TList)[];

  @Input() view: 'default' | 'table' | 'cards' | 'both' = 'default';
  @Output() viewChange = new EventEmitter();

  @ContentChild('bitHeader') headers!: TemplateRef<any>;
  @ContentChild('bitRow') rows!: TemplateRef<any>;
  @ContentChild("bitCard") cards!: TemplateRef<any>;

  @ContentChildren(BitTableRowComponent)
  contentRowsRef!: QueryList<BitTableRowComponent>;

  ngAfterContentInit(): void {
    this.catchContext();
    setTimeout(() => {
      this.initRowContent(this.contentRowsRef);
    });
    this.trackRowContent();
  }

  private catchContext() {
    if (this.rows && !this.headers) {
      console.error("Template for Headers not provided! : bit-table > bitHeader");
    }
  }

  private trackRowContent = () => {
    this.contentRowsRef.changes.subscribe(this.initRowContent)
  }

  public initRowContent = (content: QueryList<BitTableRowComponent>) => {

    if (!content.length) return;

    content.forEach((row) => {
      const cells = new Map();
      row.cells.forEach((cell, index) => {
        if (!this.columns) return;
        cells.set(this.columns[index], cell.value?.nativeElement.innerText);
      })
      this.contentRows.push(cells);
    });
  }

  public originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

}
