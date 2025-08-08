import { AfterContentInit, Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  standalone: true,
  imports: [],
  templateUrl: './code-snippet.component.html',
  styleUrl: './code-snippet.component.css'
})
export class CodeSnippetComponent {

  @Input() title!: string;
  @ViewChild('content') code!: ElementRef;

  copy() {
    navigator.clipboard.writeText(this.code.nativeElement.innerText);
  }
}
