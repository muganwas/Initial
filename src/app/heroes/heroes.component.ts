import { Component, OnInit, NgModule } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().
    subscribe( (heroes) => { this.heroes = heroes; } );
  }

  /**not needed anymore
   *onSelect(hero: Hero) {
    this.messageService.clear();
    this.messageService.add('HeroService: ' + hero.name + ' Selected');
    this.selectedHero = hero;
  }*/

  ngOnInit() {
    this.getHeroes();
  }

}
