import { AfterContentInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  standalone: true,
  imports: [],
  templateUrl: './code-snippet.component.html',
  styleUrl: './code-snippet.component.css'
})
export class CodeSnippetComponent {

  @ViewChild('content') code!: ElementRef;

  copy() {
    navigator.clipboard.writeText(this.code.nativeElement.innerText);
  }
}
