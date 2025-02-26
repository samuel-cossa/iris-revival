import { Component } from '@angular/core';
import { HomeContentComponent } from '../home-content/home-content.component';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, HomeContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
