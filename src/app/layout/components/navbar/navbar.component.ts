import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { ToggleModesComponent } from '../../../shared/components/toggle-modes/toggle-modes.component';
import { NavbarShowHideEnum } from '../../enums/navbar-show-hide.enum';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterLinkWithHref, ToggleModesComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  header_var = false;
  show_menu = false;
  toggleMenu: boolean = true;
  bg_body_tertiary: string = 'bg-body-tertiary';
  public show: string = 'hide';
  public icon: string = 'bi-list';

  public toggle_menu() {
    this.show === NavbarShowHideEnum.HIDE ? this.show = NavbarShowHideEnum.SHOW : this.show = NavbarShowHideEnum.HIDE;
    this.icon === NavbarShowHideEnum.BI_LIST ? this.icon = NavbarShowHideEnum.BI_X : this.icon = NavbarShowHideEnum.BI_LIST;
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
}
