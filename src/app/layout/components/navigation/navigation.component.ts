import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { ToggleModesComponent } from '../../../shared/components/toggle-modes/toggle-modes.component';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkWithHref, RouterLinkActive, ToggleModesComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  header_var = false;
  show_menu = false;
  public show: string = 'hide';

  screenWidth = signal<number>(window.innerWidth);

  isToggleButtonVisible = signal<boolean>(false);

  @HostListener('window;resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isToggleButtonVisible.set(true);
    } else {
      this.isToggleButtonVisible.set(false);
    }
  }

  @HostListener("document:scroll")
  scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.header_var = true;
    } else {
      this.header_var = false;
    }

    if (document.body.clientWidth < 1280) {
      this.show_menu = true;
    } else {
      this.show_menu = false;
    }
  }

  public toggle_menu() {
    this.show === 'hide' ? this.show = 'show' : this.show = 'hide';
    this.show_menu = !this.show_menu;
  }

}
