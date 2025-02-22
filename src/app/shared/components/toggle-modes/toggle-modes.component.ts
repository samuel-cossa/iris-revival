import { Component, inject } from '@angular/core';
import { DarkLightModeService } from '../../services/dark-light.mode.service';

@Component({
  selector: 'app-toggle-modes',
  imports: [],
  template: `
    <button type="button" (click)="toggleTheme()">
      <i class="bi {{darkLightModeService.colorModeSignal().icon}} text-body"></i>
    </button>
  `,
  styleUrl: './toggle-modes.component.scss'
})
export class ToggleModesComponent {
  darkLightModeService: DarkLightModeService = inject(DarkLightModeService);

  toggleTheme() {
    this.darkLightModeService.toggleModes();
  }
}
