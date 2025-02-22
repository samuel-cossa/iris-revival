import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkLightModeService } from './shared/services/dark-light.mode.service';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { FooterComponent } from './layout/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  darkLightModeService: DarkLightModeService = inject(DarkLightModeService);
  constructor() {
    this.darkLightModeService.getPrefersColorScheme();
  }
}
