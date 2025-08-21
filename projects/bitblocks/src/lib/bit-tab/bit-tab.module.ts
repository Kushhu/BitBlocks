import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitTabGroupComponent } from './bit-tab-group/bit-tab-group.component';
import { BitTabComponent } from './bit-tab/bit-tab.component';

export * from "./bit-tab-group/bit-tab-group.component";
export * from './bit-tab/bit-tab.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BitTabGroupComponent,
    BitTabComponent
  ],
  exports:[
    BitTabGroupComponent,
    BitTabComponent
  ]
})
export class BitTabsModule { }
