import {
  AbstractControl,
  ControlValueAccessor,
  ValidationErrors,
  Validator
} from '@angular/forms';

/**
 * implements core function for 
 * @class ControlValueAccessor & Validator
 */
export abstract class BaseControl implements ControlValueAccessor, Validator {
  //#region Services
  //#endregion

  //#region Fn Declaration
  protected _onChange!: (newValue: any) => void;
  protected onTouched!: () => void;
  protected abstract onInput(element: any): void;

  /** 
   * post control value change.
   * override method when need to implement custom logic
   */
  protected postWriteValue = () => { };
  //#endregion

  //#region State Declaration
  public control!: AbstractControl;
  public isDisable: boolean;
  public value: string | number | boolean | null;
  //#endregion

  constructor() {
    this.value = null;
    this.isDisable = false;
  }

  //#region Implemantation Of ControlValueAccessor

  writeValue(obj: any): void {
    this.value = obj;
    setTimeout(this.postWriteValue);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisable = isDisabled;
  }

  //#endregion


  //#region Validators implemantation

  abstract validate(control: AbstractControl): ValidationErrors | null

  //#endregion
}