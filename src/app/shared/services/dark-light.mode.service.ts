import { Injectable, signal } from '@angular/core';
import { DarkModeInterface } from '../types/dark-mode.interface';
import { dark_mode, light_mode } from '../constants/dark-mode.constants';

@Injectable({
  providedIn: 'root'
})
export class DarkLightModeService {
  isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  colorModeSignal = signal<DarkModeInterface>(light_mode);

  getPrefersColorScheme() {
    if (this.isDark) {
      this.colorModeSignal = signal<DarkModeInterface>(dark_mode);
    }
  }

  toggleModes(): void {
    this.colorModeSignal.update(
      (mode) => (mode === dark_mode ? light_mode : dark_mode)
    );
  }
}
