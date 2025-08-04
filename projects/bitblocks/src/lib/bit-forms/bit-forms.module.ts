import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BitTextboxDirective } from './directives/text/bit-textbox.directive';
import { BitEmailboxDirective } from './directives/email/bit-emailbox.directive';
import { BitPhoneDirective } from './directives/phone/bit-phone.directive';

export * from './directives/text/bit-textbox.directive'
export * from './directives/email/bit-emailbox.directive'
export * from './directives/phone/bit-phone.directive'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BitTextboxDirective,
    BitEmailboxDirective,
    BitPhoneDirective,
  ],
  exports: [
    BitTextboxDirective,
    BitEmailboxDirective,
    BitPhoneDirective,
  ]
})
export class BitFormsModule { }
