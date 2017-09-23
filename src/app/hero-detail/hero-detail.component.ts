import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from '../hero/hero.service';
import { Hero } from '../hero/hero';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  template: `
  <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name">
      </div>
      <button (click)="goBack()">Go Back</button>
    </div>
  `,
  styleUrls: ['../app.component.css']
})
    
export class HeroDetailComponent implements OnInit  {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

    @Input() selectedHero: Hero;

    ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
        .subscribe(hero => this.selectedHero = hero);
    }

    goBack(): void {
      this.location.back();
    }
}