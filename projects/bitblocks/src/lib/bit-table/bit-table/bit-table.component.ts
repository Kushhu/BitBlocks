import { CommonModule, KeyValue, KeyValuePipe } from '@angular/common';
import { AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, input, Input, InputSignal, model, Output, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BitTableRowComponent } from '../bit-table-row/bit-table-row.component';
import { BitTableCellComponent } from '../bit-table-cell/bit-table-cell.component';

@Component({
  selector: 'bit-table',
  standalone: true,
  imports: [KeyValuePipe, CommonModule,],
  templateUrl: './bit-table.component.html',
  styleUrl: './bit-table.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BitTableComponent<TList extends { [key: string]: any }> implements AfterContentInit {

  /**
   * A root level data wrapper which includes all records 
   * 
   */
  @Input()
  data?: TList[];
  contentRows: any[] = [];

  sortDirection: 'aes' | 'des' | null = null;

  @Input() showTotalRecords?: boolean;
  @Input() resizableColumns?: boolean;

  @Input() columns?: (keyof TList)[];

  view = model<'table' | 'cards' | 'both'>('table');

  @ContentChild('bitHeader') headers?: TemplateRef<any>;
  @ContentChild('bitRow') rows?: TemplateRef<any>;
  @ContentChild("bitCard") cards?: TemplateRef<any>;

  @ContentChildren(BitTableRowComponent)
  contentRowsRef!: QueryList<BitTableRowComponent>;

  ngAfterContentInit(): void {
    this.catchContext();
    setTimeout(() => this.initRowContent(this.contentRowsRef));
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
      row.cells.forEach((cell: BitTableCellComponent, index: number) => {
        if (!this.columns) return;
        cells.set(this.columns[index], cell.value?.nativeElement.innerText);
      })
      this.contentRows.push(cells);
    });

  }

  filter(key: keyof TList) {

  }

  activeSort!: keyof TList;

  sort(key: keyof TList) {
    if (this.sortDirection == null)
      this.sortDirection = 'aes';

    this.activeSort = key;

    if (this.sortDirection == 'aes') {
      this.data?.sort((a: any, b: any) => a[key] < b[key] ? -1 : 1)
      this.sortDirection = 'des';
      return;
    }

    if (this.sortDirection == 'des') {
      this.data?.sort((a: any, b: any) => a[key] > b[key] ? -1 : 1)
      this.sortDirection = 'aes'
      return;
    }

  }

  public originalOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => 0
}
