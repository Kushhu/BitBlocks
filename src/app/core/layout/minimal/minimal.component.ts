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
  constructor() {
    this.reTheme();
  }

  reTheme() {
    const theme = localStorage.getItem('theme') as 'bit-light' | 'bit-dark';
    const color = localStorage.getItem('color');
    if (theme) this.setTheme(theme);
    if (color) this.setColor(color);
  }

  setTheme(theme: 'bit-light' | 'bit-dark') {
    document.documentElement.dataset['theme'] = theme;
    localStorage.setItem('theme', theme);
  }
  setColor(theme: string) {
    document.documentElement.dataset['color'] = theme;
    localStorage.setItem('color', theme);
  }
}
