import { Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  private themeService = inject(ThemeService);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    // Apply theme class to body element (only in browser)
    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        const isDark = this.themeService.isDarkMode();
        if (isDark) {
          document.body.classList.add('dark-theme');
        } else {
          document.body.classList.remove('dark-theme');
        }
      });
    }
  }
}
