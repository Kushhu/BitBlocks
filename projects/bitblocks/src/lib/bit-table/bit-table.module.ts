import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitTableComponent } from './bit-table/bit-table.component';

export * from "./bit-table/bit-table.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BitTableComponent
  ],
  exports: [BitTableComponent]
})
export class BitTableModule { }
