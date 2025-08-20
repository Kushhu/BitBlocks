import {
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  inject,
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
import { SafePipe } from '../../core/utility/safe.pipe';
import { BitBaseDropdown, BitBaseOption } from '../base.dropdown';

@Component({
  selector: 'bit-dropdown',
  standalone: true,
  imports: [FormsModule, SafePipe],
  templateUrl: './bit-single-dropdown.component.html',
  styleUrl: '../style.dropdown.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BitSingleDropdownComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: BitSingleDropdownComponent,
      multi: true,
    },
    {
      provide: BitBaseDropdown,
      useExisting: forwardRef(() => BitSingleDropdownComponent),
    },
  ],
})
export class BitSingleDropdownComponent
  extends BitBaseDropdown<BitBaseOption> {

  //#region DOM pickers

  protected override _elementRef = inject(ElementRef);

  public override selectedOption!: ElementRef<HTMLDivElement> | null;

  /** The `BitOptions` refrence container */
  @ContentChildren(BitBaseOption)
  protected options!: QueryList<BitBaseOption>;

  //#endregion

  /**
   * implements a **single selection** of dropdown.
   *
   * @param option BitOption | Null
   */
  public select(option: BitBaseOption | null) {
    if (option?.selected) return;

    if (option) this.selectFlag(option);

    this.selectedOption = option?.content ?? null;

    this.value = option?.value() ?? null;

    this.search.set('');

    this._onChange(this.value);

    this.modify(this.options, true);

    this.closeDrop();
  }

  /**
   *  - checks if dropdown value is required
   */
  override validate(control: AbstractControl): ValidationErrors | null {
    if (control.hasValidator(Validators.required) && !this.selectedOption) {
      if (control.dirty) this.valid = false;
      return { required: true };
    }

    if (control.dirty) this.valid = true;
    return null;
  }

  protected override postWriteValue = () => {
    const hasOption = this.options.find((o) => o.value() == this.value);

    if (hasOption) {
      setTimeout(() => this.select(hasOption));
      this.valid = true;
    }

    if (!hasOption && !this.isLoading() && this.value != null)
      this.valid = false;
  };
}
