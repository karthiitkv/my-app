import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { HeroService } from './hero/hero.service';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes">Heroes</a>
    <a routerLink="/questions">Questions</a>
    </nav>
    <router-outlet></router-outlet>
    <!--<my-hero></my-hero>-->
  `,
  //template: '<h1>{{title}}</h1><h1> Hello {{hero}}<h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of My Heroes'
}
