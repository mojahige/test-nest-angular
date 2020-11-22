import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroesUrl = 'api/hero';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
