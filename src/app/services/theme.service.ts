import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDarkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this._isDarkMode.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Check localStorage for saved theme preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this._isDarkMode.next(savedTheme === 'dark');
        this.applyTheme(savedTheme === 'dark');
      }
    }
  }

  toggleTheme() {
    const newTheme = !this._isDarkMode.value;
    this._isDarkMode.next(newTheme);
    this.applyTheme(newTheme);

    // Save theme preference in localStorage
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    }
  }

  private applyTheme(isDarkMode: boolean) {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
}
