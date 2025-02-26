import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkLightModeService } from './shared/services/dark-light.mode.service';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { NavigationComponent } from './layout/components/navigation/navigation.component';
import { BackToTopComponent } from './shared/components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NavigationComponent, BackToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  darkLightModeService: DarkLightModeService = inject(DarkLightModeService);
  constructor() {
    this.darkLightModeService.getPrefersColorScheme();
  }
}
