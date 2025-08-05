import { CommonModule, KeyValuePipe } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bit-table',
  standalone: true,
  imports: [KeyValuePipe, CommonModule],
  templateUrl: './bit-table.component.html',
  styleUrl: './bit-table.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BitTableComponent {
  @Input() data!: any[];

  @ContentChild('Headers') headers!: TemplateRef<any>;
  @ContentChild('Rows') rows!: TemplateRef<any>;

  ngOnInit(): void { }
}
