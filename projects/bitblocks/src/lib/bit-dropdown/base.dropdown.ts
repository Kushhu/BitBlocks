import {
  AfterContentInit,
  Component,
  ElementRef,
  Host,
  HostListener,
  inject,
  Input,
  input,
  model,
  Optional,
  QueryList,
  Renderer2,
  ViewChild
} from '@angular/core';
import { BaseControl } from '../core/base.control';


@Component({
  template: '',
})
export abstract class BitBaseOption {
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
    @Host() @Optional() protected _dropper: BitBaseDropdown<BitBaseOption>
  ) {
    if (!_dropper)
      console.error(
        'No parent dropdown found! : Use option component inside dropdown'
      );
  }
};

@Component({
  template: '',
})
export abstract class BitBaseDropdown<TOption extends BitBaseOption>
  extends BaseControl
  implements AfterContentInit {
  //#region Deps

  /**
   * current HTML DOM element refrence,
   * used for outside click listner
   */
  protected abstract _elementRef: ElementRef<any>;

  renderer = inject(Renderer2)

  //#endregion

  //#region Input

  public isSearchable = input<boolean>(false, { alias: 'searchable' });

  public placeholder = input();

  /** minimum line box consist */
  public minHeight = input<number>(1);

  public searchPlaceholder = input('🔍 Search');

  public isLoading = input<boolean>(false, { alias: 'loading' });

  //#endregion

  //#region State Handlers

  /** search string */
  public search = model<string>();

  /** current selected DOM option */
  public abstract selectedOption:
    | ElementRef<HTMLDivElement>
    | ElementRef<HTMLDivElement>[]
    | null;

  protected optionFocusIndex = -1;

  public valid!: boolean;

  public setOfOptions = new Set();

  protected noSearchAvailable = false;

  //#endregion

  //#region DOM pickers

  /** DOM Element - search texbox  */
  @ViewChild('searchEle')
  private searchEle!: ElementRef<HTMLInputElement>;

  /** The `BitOptions` refrence container */
  protected abstract options: QueryList<TOption>;

  //#endregion

  ngAfterContentInit(): void {
    this.options.changes.subscribe(() => setTimeout(this.postWriteValue));
  }

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
    this.disableBodyScroll();
  };

  /**
   * Public Method -
   * closes option list
   *
   * @use isOpen to check state
   */
  public closeDrop = () => {
    if (this.isOpen) this.enableBodyScroll();
    this.isOpen = false;
    this.optionFocusIndex = -1;
  };

  //#endregion

  //#region Extentions

  protected modify(options: TOption[] | QueryList<TOption>, status: boolean) {
    options.map((o) => (o.active = status));
  }

  public get activeOptions() {
    return this.options.filter((o) => o.active);
  }

  /**
   * - defaults a selected value from options, rest unselected
   *
   * **Override this method**
   *    to implement custom business logic
   */
  protected selectFlag(option: TOption) {
    this.options.map((o) => (o.selected = false));
    option.selected = true;
  }

  protected focusOption() {
    this.options.map((o) => (o.tabFocus = false));
    const option = this.activeOptions.at(this.optionFocusIndex);
    if (!option) return;
    option.tabFocus = true;
    option.content.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }

  //#endregion

  /**
   * enables only options which contains search substring.
   *
   * @param element Input Textbox
   */
  protected onInput(element: HTMLInputElement) {
    this.options.map((option) => {
      option.active = option.content.nativeElement.innerText
        .toLowerCase()
        .includes(element.value.toLowerCase())
        ? true
        : false;
    });

    this.noSearchAvailable = this.options.toArray().every((o) => !o.active);

    this.optionFocusIndex = 0;
    this.focusOption();
  }

  public abstract select(option: TOption | null): void;

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
    this.focusOption();
  }

  public onArrowDown() {
    if (this.optionFocusIndex == this.activeOptions.length - 1) return;
    this.searchEle.nativeElement.blur();
    ++this.optionFocusIndex;
    this.focusOption();
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
  private enableBodyScroll = () => {
    this.renderer.removeStyle(document.body, 'overflow')
  };

  private disableBodyScroll = () => {
    this.renderer.setStyle(document.body, 'overflow', 'hidden')
  };
  //#endregion
}
