import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  constructor() {
    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkMode.set(savedTheme === 'dark');
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkMode.set(prefersDark);
      }

      effect(() => {
        localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
      });
    }
  }

  toggleTheme(): void {
    this.isDarkMode.set(!this.isDarkMode());
  }

  setDarkMode(isDark: boolean): void {
    this.isDarkMode.set(isDark);
  }
}
