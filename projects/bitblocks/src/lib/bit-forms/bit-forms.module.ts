import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BitTextboxDirective } from './directives/text/bit-textbox.directive';
import { BitEmailboxDirective } from './directives/email/bit-emailbox.directive';
import { BitPhoneDirective } from './directives/phone/bit-phone.directive';
import { BitFormService } from './services/bit.form.service';
import { BitNumberboxDirective } from './directives/number/bit-numberbox.directive';

export * from './directives/text/bit-textbox.directive'
export * from './directives/email/bit-emailbox.directive'
export * from './directives/phone/bit-phone.directive'
export * from './directives/number/bit-numberbox.directive'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BitTextboxDirective,
    BitEmailboxDirective,
    BitPhoneDirective,
    BitNumberboxDirective
  ],
  exports: [
    BitTextboxDirective,
    BitEmailboxDirective,
    BitPhoneDirective,
    BitNumberboxDirective
  ],
  providers: [BitFormService]
})
export class BitFormsModule { }
