import { AfterContentInit, Component, ContentChildren, ElementRef, HostListener, inject, input, model, QueryList, ViewChild } from '@angular/core';
import { AbstractControl, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import { BaseControl } from '../../core/base.control';
import { SafePipe } from '../../core/utils/safe.pipe';
import { BitOptionComponent } from '../bit-option/bit-option.component';

@Component({
  selector: 'bit-dropdown',
  standalone: true,
  imports: [FormsModule, SafePipe],
  templateUrl: './bit-dropdown.component.html',
  styleUrl: './bit-dropdown.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BitDropdownComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: BitDropdownComponent,
      multi: true
    }
  ]
})
export class BitDropdownComponent extends BaseControl implements AfterContentInit {

  //#region State Handlers

  /** search string */
  public search = model<string>();

  /** current selected DOM option */
  public selectedOption!: ElementRef<HTMLDivElement> | null;

  private optionFocusIndex = -1;

  public valid!: boolean;

  public setOfOptions = new Set();

  protected noSearchAvailable = false;

  //#endregion

  //#region Input 

  /** allows multi select for option */
  public multiple = input<boolean>(false);

  public isSearchable = input<boolean>(false, { alias: 'searchable' });

  public placeholder = input();

  public searchPlaceholder = input("🔍 Search");

  public isLoading = input<boolean>(false, { alias: 'loading' });

  //#endregion

  //#region Service Injections

  /** 
   * current HTML DOM element refrence,
   * used for outside click listner
   */
  private _elementRef = inject(ElementRef);

  //#endregion

  //#region DOM pickers

  /** DOM Element - search texbox  */
  @ViewChild('searchEle')
  private searchEle!: ElementRef<HTMLInputElement>;

  /** The `BitOptions` refrence container */
  @ContentChildren(BitOptionComponent)
  private options!: QueryList<BitOptionComponent>;

  //#endregion

  /**
   * enables only options which contains search substring.   
   * 
   * @param element Input Textbox 
   */
  protected override onInput(element: HTMLInputElement) {

    this.options.map(option => {
      option.active = option.content.nativeElement.innerText.toLowerCase().includes(element.value.toLowerCase()) ? true : false
    })

    this.noSearchAvailable = this.options.toArray().every(o => !o.active)

    this.optionFocusIndex = 0;
    this.focusOption();

  }

  //#region Extentions

  private modify(options: BitOptionComponent[] | QueryList<BitOptionComponent>, status: boolean) {
    options.map(o => o.active = status);
  }

  public get activeOptions() {
    return this.options.filter(o => o.active)
  }

  private selectFlag(option: BitOptionComponent) {
    this.options.map(o => o.selected = false)
    option.selected = true;
  }

  private focusOption() {
    this.options.map(o => o.tabFocus = false)
    const option = this.activeOptions.at(this.optionFocusIndex);
    if (!option) return;
    option.tabFocus = true;
    option.content.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  /** initializes flat options values into set */
  initOptionsSet() {
    // this.setOfOptions.clear();
    this.options?.map(option => this.setOfOptions.add(option.value()))
  }

  //#endregion

  //#region Open State : Options

  /**
   * Public State
   * Denotes wether option list is active or not;
   */
  public isOpen: boolean = false;

  /**
   * Public Method -
   * opens option list
   * 
   * @use isOpen to check state
  */
  public openDrop = () => {
    this.isOpen = true;
    this.disableScroll();
  };

  /**
   * Public Method -
   * closes option list
   * 
   * @use isOpen to check state
  */
  public closeDrop = () => {
    this.isOpen = false;
    this.optionFocusIndex = -1;
    this.enableScroll();
  };

  //#endregion


  /**
   * implements a **single selection** of dropdown.
   * 
   * @param option BitOption | Null
   */
  public select(option: BitOptionComponent | null) {

    if (option)
      this.selectFlag(option);

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
      if (control.dirty)
        this.valid = false;
      return { required: true }
    }

    if (control.dirty)
      this.valid = true;
    return null;
  }

  protected override postWriteValue = () => {

    const hasOption = this.options.find(o => o.value() == this.value);

    if (hasOption) {
      setTimeout(() => this.select(hasOption));
      // this.select(hasOption)
      this.valid = true;
    }

    if (!hasOption && !this.isLoading() && this.value != null) this.valid = false;
  };

  ngAfterContentInit(): void {
    this.options.changes.subscribe(this.postWriteValue)
  }

  //#region Host Listners

  /** Outside DOM Click
   *  closes option list if clicked outside current element
   */
  @HostListener('document:click', ['$event.target'])
  private closeDropdown(target: HTMLElement) {
    const clickedInside = this._elementRef.nativeElement.contains(target);
    if (!clickedInside) this.closeDrop();
  }


  /** Options : Keyboard Events
   *  uses diffrent key listners to handle navigation of option list
   * 
   */
  @HostListener('window:keyup', ['$event'])
  private optionsKeyUp(event: KeyboardEvent) {
    if (!this.isOpen) return;

    if (event.key == 'ArrowDown') this.onArrowDown();
    if (event.key == 'ArrowUp') this.onArrowUp();
    if (event.key == 'Enter') this.onEnter();
  }

  public onArrowUp() {
    if (this.optionFocusIndex <= 0) return;
    this.searchEle.nativeElement.blur();
    --this.optionFocusIndex;
    this.focusOption()
  }

  public onArrowDown() {
    if (this.optionFocusIndex == this.activeOptions.length - 1) return;
    this.searchEle.nativeElement.blur();
    ++this.optionFocusIndex;
    this.focusOption()
  }

  public onEnter() {
    const option = this.activeOptions.at(this.optionFocusIndex);

    if (!option) return;

    this.optionFocusIndex = -1;
    this.searchEle.nativeElement.blur();
    this.select(option);
  }

  //#endregion

  //#region Scroll Listner
  private enableScroll = () => {
    document.body.style.overflow = '';
  }

  private disableScroll = () => {
    document.body.style.overflow = 'hidden';
  }
  //#endregion
}
