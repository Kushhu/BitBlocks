import { CommonModule, KeyValuePipe } from '@angular/common';
import { AfterContentInit, Component, ContentChild, EventEmitter, HostListener, input, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bit-table',
  standalone: true,
  imports: [KeyValuePipe, CommonModule],
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

  @Input() showTotalRecords?: boolean;
  @Input() columns!: (keyof TList)[];

  @Input() view: 'default' | 'table' | 'cards' | 'both' = 'default';
  @Output() viewChange = new EventEmitter();

  @ContentChild('bitHeader') headers!: TemplateRef<any>;
  @ContentChild('bitRow') rows!: TemplateRef<any>;
  @ContentChild("bitCard") cards!: TemplateRef<any>;

  ngAfterContentInit(): void { }

  // Under Testing 
  // @HostListener('window:resize', [])
  // onResize() {
  //   if (window.innerWidth < 600) {
  //     return this.view = 'cards'
  //   }
  //   return this.view = 'table'
  // }

}
