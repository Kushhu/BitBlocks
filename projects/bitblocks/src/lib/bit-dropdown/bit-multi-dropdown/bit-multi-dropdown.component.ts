import {
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  inject,
  input,
  QueryList,
  ViewChild
} from '@angular/core';
import {
  AbstractControl,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { BitBaseDropdown } from '../base.dropdown';
import { BitCheckedOptionComponent } from '../bit-checked-option/bit-checked-option.component';
import { BitOptionComponent } from '../bit-dropdown.module';
import { SafePipe } from '../../core/utils/safe.pipe';

@Component({
  selector: 'bit-multi-dropdown',
  standalone: true,
  imports: [FormsModule, SafePipe],
  templateUrl: './bit-multi-dropdown.component.html',
  styleUrl: '../style.dropdown.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BitMultiDropdownComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: BitMultiDropdownComponent,
      multi: true,
    },
    {
      provide: BitBaseDropdown,
      useExisting: forwardRef(() => BitMultiDropdownComponent),
    },
  ],
})
export class BitMultiDropdownComponent extends BitBaseDropdown<BitOptionComponent | BitCheckedOptionComponent> {


  minHeight = input();

  protected override _elementRef = inject(ElementRef);
  public override selectedOption: ElementRef<HTMLDivElement>[] | null = []
  public override value!: any[] | null;

  @ContentChildren(BitCheckedOptionComponent)
  protected options!: QueryList<BitCheckedOptionComponent>;

  select(option: BitCheckedOptionComponent | null): void {

    if (!option) return;
    if (!this.value) return;

    if (option?.selected) {
      const index = this.value.findIndex(o => o == option.value())
      this.value.splice(index, 1)
    }

    if (!option?.selected) {
      this.selectedOption?.push(option.content)
      this.value?.push(option?.value())
    }

    this.selectedOption = [];

    this.options.map((option) => {
      if (this.value?.length && this.value.includes(option.value())) {
        this.selectedOption?.push(option.content);
      }
      option.tabFocus = false;
    })


    option.selected = !option.selected;

    this._onChange(this.value);
  }

  removeOption(text: string) {
    const optionToBeRemoved = this.options.find(o => o.content.nativeElement.innerText.toLowerCase() == text.toLowerCase())
    if (optionToBeRemoved) this.select(optionToBeRemoved);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.hasValidator(Validators.required) && !this.selectedOption) {
      if (control.dirty) this.valid = false;
      return { required: true };
    }

    if (control.dirty) this.valid = true;
    return null;
  }

  setOfValues = new Set();

  protected override postWriteValue = () => {

    this.value?.map(v => this.setOfValues.add(v));

    this.options.map((option) => {

      if (this.setOfValues.has(option.value())) {
        option.selected = true;
        this.selectedOption?.push(option.content);
        this.setOfValues.delete(option.value());
      }

      else {
        option.selected = false;
      }
    })

    if (this.setOfValues.size) this.valid = false;

    if (!this.setOfValues.size) this.valid = true;
  };
}
