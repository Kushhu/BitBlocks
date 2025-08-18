import { Component, ElementRef, Host, Input, input, Optional, ViewChild } from '@angular/core';
import { BitBaseDropdown, BitBaseOption } from '../base.dropdown';
import { BitOptionComponent } from '../bit-dropdown.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bit-checked-option',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bit-checked-option.component.html',
  styleUrl: './bit-checked-option.component.css'
})
export class BitCheckedOptionComponent implements BitBaseOption {
  /**
   *  emits option key value, when selected
   *  required! to handle unique logics
   */
  value = input.required<string | number | boolean | null>();
  bindValue: any;
  meta!: any[];

  @Input() disable = false;
  @Input() selected = false;
  @Input() active = true;
  @Input() tabFocus = false;

  @ViewChild('optionEle') content!: ElementRef<HTMLDivElement>;

  constructor(
    @Host() @Optional() protected _dropper: BitBaseDropdown<BitCheckedOptionComponent>
  ) {
    if (!_dropper)
      console.error(
        'No parent dropdown found! : Use bit-option component inside bit-dropdown'
      );
  }
}