import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'hero-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../app.component.css']
})
    
export class DashboardComponent implements OnInit {
    constructor(private heroService: HeroService) {
        //Need to check calling getHeroes method here
      }
    heroes: Hero[];

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1,5));
    }

}