import { Component, OnInit, NgModule } from '@angular/core';
import { Hero } from '../../hero';
import { Heroes } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().
    subscribe( (heroes) => { this.heroes = heroes; } );
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }

}
