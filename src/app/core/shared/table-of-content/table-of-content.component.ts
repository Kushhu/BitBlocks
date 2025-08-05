import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BitSeparatorComponent } from '../../../../../projects/bitblocks/src/public-api';

@Component({
  selector: 'app-table-of-content',
  standalone: true,
  imports: [BitSeparatorComponent],
  templateUrl: './table-of-content.component.html',
  styleUrl: './table-of-content.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TableOfContentComponent implements OnInit {

  sections!: any;

  ngOnInit(): void {
    this.sections = document.querySelectorAll('section');
  }

  scroll = (id: string) => {
    const element = document.getElementById(id.trim());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
