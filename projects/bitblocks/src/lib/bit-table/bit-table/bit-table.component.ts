import { CommonModule, KeyValue, KeyValuePipe } from '@angular/common';
import { AfterContentInit, Component, computed, ContentChild, ContentChildren, ElementRef, inject, input, Input, model, QueryList, Renderer2, signal, TemplateRef, ViewChild, ViewChildren, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { BitTableCellComponent } from '../bit-table-cell/bit-table-cell.component';
import { BitTableRowComponent } from '../bit-table-row/bit-table-row.component';
import { CamelToSpacePipe } from '../../core/pipes/camelToSapce.pipe';

@Component({
  selector: 'bit-table',
  standalone: true,
  imports: [KeyValuePipe, CommonModule, CamelToSpacePipe],
  templateUrl: './bit-table.component.html',
  styleUrl: './bit-table.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BitTableComponent<TList extends { [key: string]: any }> implements AfterContentInit {

  /**
   * A root level data wrapper which includes all records 
   * 
   */
  readonly data = input<TList[] | null>();
  readonly columns = input<(keyof TList)[] | null>();
  readonly columnsToBeDisplayed = computed(() => Object.keys(this.data()?.at(0) ?? {}));

  readonly sortable = input<boolean>(false);
  readonly view = model<'table' | 'cards' | 'both'>('table');

  protected contentRows: any[] = [];

  @Input() showTotalRecords?: boolean;
  @Input() resizableColumns?: boolean;

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
        if (!this.columns()) return;
        cells.set(this.columns()?.at(index), cell.value?.nativeElement.innerText);
      })
      this.contentRows.push(cells);
    });

  }

  filter(key: keyof TList) {

  }

  sortDirection = signal<'ascending' | 'descending' | null>(null);

  activeSortColumn = signal<keyof TList | null>(null);

  sort(key: keyof TList) {
    if (!this.sortable()) return;

    if (key != this.activeSortColumn()) this.sortDirection.set(null);

    if (this.sortDirection() == null)
      this.sortDirection.set('ascending');

    this.activeSortColumn.set(key);

    if (this.sortDirection() == 'ascending') {
      this.data()?.sort((a: any, b: any) => a[key] < b[key] ? -1 : 1)
      this.contentRows?.sort((a: any, b: any) => a.get(key) < b.get(key) ? -1 : 1)

      this.sortDirection.set('descending');
      return;
    }

    if (this.sortDirection() == 'descending') {
      this.data()?.sort((a: any, b: any) => a[key] > b[key] ? -1 : 1)
      this.contentRows?.sort((a: any, b: any) => a.get(key) > b.get(key) ? -1 : 1)

      this.sortDirection.set('ascending')
      return;
    }

  }

  public originalOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => 0
}
