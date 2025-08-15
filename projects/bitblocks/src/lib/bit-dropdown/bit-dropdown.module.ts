import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitDropdownComponent } from './bit-dropdown/bit-dropdown.component';
import { BitOptionComponent } from './bit-option/bit-option.component';

export * from './bit-dropdown/bit-dropdown.component'
export * from './bit-option/bit-option.component'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BitDropdownComponent,
    BitOptionComponent
  ],
  exports: [
    BitDropdownComponent,
    BitOptionComponent
  ]
})
export class BitDropdownModule { }
