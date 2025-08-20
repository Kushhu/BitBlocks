import { Component, forwardRef, Host, Optional } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BitBaseDropdown, BitBaseOption } from '../base.dropdown';

@Component({
  selector: 'bit-checked-option',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bit-checked-option.component.html',
  styleUrl: './bit-checked-option.component.css', 
  providers: [
    {
      provide: BitBaseOption,
      useExisting: forwardRef(() => BitCheckedOptionComponent),
    },
  ]
})
export class BitCheckedOptionComponent extends BitBaseOption {

}