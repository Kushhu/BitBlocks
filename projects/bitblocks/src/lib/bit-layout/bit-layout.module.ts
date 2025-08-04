import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitSeparatorComponent } from './bit-separator/bit-separator.component';

export * from "./bit-separator/bit-separator.component"

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BitSeparatorComponent
  ],
  exports: [BitSeparatorComponent]
})
export class BitLayoutModule { }
