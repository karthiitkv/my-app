import { Component } from '@angular/core';
import { Hero } from './hero';

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
    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  //template: '<h1>{{title}}</h1><h1> Hello {{hero}}<h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = HEROES;
  title = 'Tour of Heroes';
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    console.log("my method");
    this.selectedHero = hero;
  };
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
