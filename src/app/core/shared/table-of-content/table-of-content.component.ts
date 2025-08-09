import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BitSeparatorComponent } from '../../../../../projects/bitblocks/src/public-api';

@Component({
  selector: 'app-table-of-content',
  standalone: true,
  imports: [BitSeparatorComponent, RouterLink],
  templateUrl: './table-of-content.component.html',
  styleUrl: './table-of-content.component.css',
})
export class TableOfContentComponent implements OnInit, AfterViewInit {

  sections!: any
  activeFragment: string | null = null;

  ngOnInit(): void {
    this.sections = document.querySelectorAll('section .header h2');
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.children[0].children[0].id;
          this.activeFragment = id;
        }
      });
    }, { threshold: 0.6 });

    this.sections.forEach((section: any) => observer.observe(section.parentElement.parentElement));
  }
}
