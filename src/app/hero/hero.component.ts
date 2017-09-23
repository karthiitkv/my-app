import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-hero',
  templateUrl: './hero.component.html',
  /*template: `
    <h1>{{title}}</h1>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [selectedHero]="selectedHero"></hero-detail>
  `,*/
  styleUrls: ['../app.component.css']
})
export class HeroComponent implements OnInit{
  constructor(private heroService: HeroService, private router: Router) {
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
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
