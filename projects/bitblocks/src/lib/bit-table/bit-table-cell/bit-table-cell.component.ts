import { AfterContentInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'bit-table-cell',
  standalone: true,
  imports: [],
  templateUrl: './bit-table-cell.component.html',
  styleUrl: './bit-table-cell.component.css'
})
export class BitTableCellComponent implements AfterContentInit {
  @Input() key: any;
  // @Input() value?: string | number | null;

  @ViewChild('content') value!: ElementRef;

  ngAfterContentInit(): void {
  }
}
