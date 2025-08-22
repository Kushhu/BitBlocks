import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'bit-tab',
  standalone: true,
  imports: [],
  templateUrl: './bit-tab.component.html',
  styleUrl: './bit-tab.component.css'
})
export class BitTabComponent {

  title = input.required<string>();

  @Input() active!: boolean;  
}
