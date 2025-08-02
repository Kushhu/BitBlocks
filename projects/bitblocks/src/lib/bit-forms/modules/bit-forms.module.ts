import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BitTextboxDirective } from '../directives/text/bit-textbox.directive';
import { BitEmailboxDirective } from '../directives/email/bit-emailbox.directive';

export * from '../directives/text/bit-textbox.directive'
export * from '../directives/email/bit-emailbox.directive'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BitTextboxDirective,
    BitEmailboxDirective
  ],
  exports: [
    BitTextboxDirective,
    BitEmailboxDirective
  ]
})
export class BitFormsModule { }
