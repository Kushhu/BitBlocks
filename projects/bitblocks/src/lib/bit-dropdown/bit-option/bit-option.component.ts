import {
  Component,
  forwardRef
} from '@angular/core';
import { BitBaseOption } from '../base.dropdown';

@Component({
  selector: 'bit-option',
  standalone: true,
  imports: [],
  templateUrl: './bit-option.component.html',
  styleUrl: './bit-option.component.css',
  providers: [
    {
      provide: BitBaseOption,
      useExisting: forwardRef(() => BitOptionComponent),
    },
  ]
})
export class BitOptionComponent extends BitBaseOption {

}
