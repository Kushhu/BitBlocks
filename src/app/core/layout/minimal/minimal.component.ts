import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-minimal',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './minimal.component.html',
  styleUrl: './minimal.component.css'
})
export class MinimalComponent {

}
