import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { HeroService } from './hero/hero.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <router-outlet></router-outlet>
    <!--<my-hero></my-hero>-->
  `,
  //template: '<h1>{{title}}</h1><h1> Hello {{hero}}<h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App'
}
