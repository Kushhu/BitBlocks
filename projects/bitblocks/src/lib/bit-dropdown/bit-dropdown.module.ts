import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitSingleDropdownComponent } from './bit-single-dropdown/bit-single-dropdown.component';
import { BitOptionComponent } from './bit-option/bit-option.component';
import { BitMultiDropdownComponent } from './bit-multi-dropdown/bit-multi-dropdown.component';
import { BitCheckedOptionComponent } from './bit-checked-option/bit-checked-option.component';

export * from './bit-single-dropdown/bit-single-dropdown.component'
export * from './bit-multi-dropdown/bit-multi-dropdown.component'
export * from './bit-option/bit-option.component'
export * from './bit-checked-option/bit-checked-option.component'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BitSingleDropdownComponent,
    BitMultiDropdownComponent,
    BitOptionComponent,
    BitCheckedOptionComponent
  ],
  exports: [
    BitSingleDropdownComponent,
    BitMultiDropdownComponent,
    BitOptionComponent,
    BitCheckedOptionComponent
  ]
})
export class BitDropdownModule { }
