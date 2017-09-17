import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [selectedHero]="selectedHero"></hero-detail>
  `,
  //template: '<h1>{{title}}</h1><h1> Hello {{hero}}<h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private heroService: HeroService) {
    //Need to check calling getHeroes method here
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  heroes:Hero[];
  title = 'Tour of Heroes';
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    console.log("my method");
    this.selectedHero = hero;
  };
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}
