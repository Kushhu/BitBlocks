import {
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  inject,
  input,
  QueryList
} from '@angular/core';
import {
  AbstractControl,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { BitBaseDropdown, BitBaseOption } from '../base.dropdown';

@Component({
  selector: 'bit-multi-dropdown',
  standalone: true,
  imports: [FormsModule],
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
export class BitMultiDropdownComponent extends BitBaseDropdown<BitBaseOption> {

  protected _elementRef = inject(ElementRef);

  public selectedOption: ElementRef<HTMLDivElement>[] | null = []
  public override value!: any[] | null;
  protected setOfValues = new Set();

  @ContentChildren(BitBaseOption)
  protected options!: QueryList<BitBaseOption>;

  public select(option: BitBaseOption | null): void {

    if (!option) return;
    if (!this.value) this.value = []

    if (option.selected) {
      const index = this.value.findIndex(o => o == option.value())
      this.value.splice(index, 1)
    }

    if (!option.selected) {
      this.selectedOption?.push(option.content)
      this.value.push(option?.value())
    }

    this.setTemplateOptionList();

    option.selected = !option.selected;

    this._onChange(this.value);
  }

  private setTemplateOptionList() {
    // to reset prev state
    this.selectedOption = [];
    this.options.map((option) => {
      // if option key subsets the control
      if (this.value?.length && this.value.includes(option.value())) {
        this.selectedOption?.push(option.content);
      }
      // remove's keyboard focus
      option.tabFocus = false;
    })
  }

  protected remove(text: string) {
    const optionToBeRemoved = this.options.find(o => o.content.nativeElement.innerText.toLowerCase() == text.toLowerCase())
    if (optionToBeRemoved) this.select(optionToBeRemoved);
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    if (control.hasValidator(Validators.required) && !this.selectedOption) {
      if (control.dirty) this.valid = false;
      return { required: true };
    }

    if (control.dirty) this.valid = true;
    return null;
  }

  protected override postWriteValue = () => {

    this.value?.map(v => this.setOfValues.add(v));

    this.checkValuesExistInOptions();

    if (this.setOfValues.size) this.valid = false;

    if (!this.setOfValues.size && this.value != null) this.valid = true;
  };

  private checkValuesExistInOptions() {
    this.selectedOption = []

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
  }
}
