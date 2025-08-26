import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-minimal',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './minimal.component.html',
  styleUrl: './minimal.component.css'
})
export class MinimalComponent {

  setTheme(theme: 'bit-light' | 'bit-dark') {
    document.documentElement.dataset['theme'] = theme;
  }
  setColor(theme: string) {
    document.documentElement.dataset['color'] = theme;
  }
}
