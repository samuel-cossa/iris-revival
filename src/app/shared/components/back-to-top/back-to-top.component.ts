import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  imports: [],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {
  visible: boolean = false;

  goTop() {
    document.getElementById("page-header")?.scrollIntoView({ behavior: "smooth" });
    document.documentElement.scrollTop = 0;
  }

  @HostListener("document:scroll")
  scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

}
