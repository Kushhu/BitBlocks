import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BitTextboxDirective } from '../directives/text/bit-textbox.directive';

export * from '../directives/text/bit-textbox.directive'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BitTextboxDirective
  ],
  exports: [
    BitTextboxDirective
  ]
})
export class BitFormsModule { }
