import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitTableComponent } from './bit-table/bit-table.component';
import { BitTableCardComponent } from './bit-table-card/bit-table-card.component';

export * from "./bit-table/bit-table.component";
export * from "./bit-table-card/bit-table-card.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BitTableComponent,
    BitTableCardComponent
  ],
  exports: [BitTableComponent, BitTableCardComponent]
})
export class BitTableModule { }
