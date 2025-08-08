import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitTableComponent } from './bit-table/bit-table.component';
import { BitTableCardComponent } from './bit-table-card/bit-table-card.component';
import { BitTableRowComponent } from './bit-table-row/bit-table-row.component';
import { BitTableCellComponent } from './bit-table-cell/bit-table-cell.component';

export * from "./bit-table/bit-table.component";
export * from "./bit-table-card/bit-table-card.component";
export * from './bit-table-row/bit-table-row.component';
export * from './bit-table-cell/bit-table-cell.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BitTableComponent,
    BitTableRowComponent,
    BitTableCellComponent,
    BitTableCardComponent
  ],
  exports: [
    BitTableComponent,
    BitTableRowComponent,
    BitTableCellComponent,
    BitTableCardComponent
  ]
})
export class BitTableModule { }
