import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitOutlinedButtonDirective } from './directives/bit-outlined-button.directive';
import { BitIconButtonDirective } from './directives/bit-icon-button.directive';
import { BitTextButtonDirective } from './directives/bit-text-button.directive';
import { BitFillButtonDirective } from './directives/bit-fill-button.directive';

export * from './directives/bit-icon-button.directive'
export * from './directives/bit-outlined-button.directive'
export * from './directives/bit-text-button.directive'
export * from './directives/bit-fill-button.directive'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BitOutlinedButtonDirective,
    BitIconButtonDirective,
    BitFillButtonDirective,
    BitTextButtonDirective
  ],
  exports: [
    BitOutlinedButtonDirective,
    BitIconButtonDirective,
    BitFillButtonDirective,
    BitTextButtonDirective
  ]
})
export class BitButtonModule { }
