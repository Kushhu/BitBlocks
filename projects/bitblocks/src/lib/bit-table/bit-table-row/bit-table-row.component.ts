import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { BitTableCellComponent } from '../bit-table-cell/bit-table-cell.component';

@Component({
  selector: 'bit-table-row',
  standalone: true,
  imports: [],
  templateUrl: './bit-table-row.component.html',
  styleUrl: './bit-table-row.component.css'
})
export class BitTableRowComponent implements AfterContentInit {

  @Input() key?: string;

  @ContentChildren(BitTableCellComponent)
  cells!: QueryList<BitTableCellComponent>;

  ngAfterContentInit(): void {

  }
}
