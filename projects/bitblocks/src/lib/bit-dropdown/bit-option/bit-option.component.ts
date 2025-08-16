import { Component, computed, ElementRef, Host, Input, input, Optional, ViewChild } from '@angular/core';
import { BitDropdownComponent } from '../bit-dropdown/bit-dropdown.component';

@Component({
  selector: 'bit-option',
  standalone: true,
  imports: [],
  templateUrl: './bit-option.component.html',
  styleUrl: './bit-option.component.css',
})
export class BitOptionComponent {

  /** 
   *  emits option key value, when selected 
   *  required! to handle unique logics
   */
  value = input.required<string | number | boolean | null>();
  @Input() selected = false;
  bindValue: any;
  meta!: any[];

  @Input() active = true;
  @Input() tabFocus = false;

  @ViewChild('optionEle') content!: ElementRef<HTMLDivElement>;

  constructor(@Host() @Optional() protected _dropper: BitDropdownComponent) {
    if (!_dropper) console.error('No parent dropdown found! : Use bit-option component inside bit-dropdown');
  }

}
