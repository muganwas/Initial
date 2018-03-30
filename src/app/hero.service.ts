import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InMemoryDataService } from './in-memery-data.service';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  getHeroes(): Observable<Hero[]> {
    /*this.messageService.add('HeroesService: Hero fetched');*/
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url);
  }
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
