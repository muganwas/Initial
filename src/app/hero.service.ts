import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroesService: Hero fetched');
    return of(Heroes);
  }
  constructor(private messageService: MessageService) { }
}
