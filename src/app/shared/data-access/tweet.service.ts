import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tweet } from '../types/tweet.type';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  tweets$ = new BehaviorSubject<Tweet[]>([
    {
      text: 'Tweet de prueba',
      user: { username: 'cfres', fullname: 'Cristian de Gracia' },
    },
    {
      text: 'Tweet de prueba',
      user: { username: 'cfres', fullname: 'Cristian de Gracia' },
    },
    {
      text: 'Tweet de prueba',
      user: { username: 'cfres', fullname: 'Cristian de Gracia' },
    },
    {
      text: 'Tweet de prueba',
      user: { username: 'cfres', fullname: 'Cristian de Gracia' },
    },
    {
      text: 'Tweet de prueba',
      user: { username: 'cfres', fullname: 'Cristian de Gracia' },
    },
    {
      text: 'Tweet de prueba',
      user: { username: 'cfres', fullname: 'Cristian de Gracia' },
    },
    {
      text: 'Tweet de prueba',
      user: { username: 'cfres', fullname: 'Cristian de Gracia' },
    },
    {
      text: 'Tweet de prueba',
      user: { username: 'cfres', fullname: 'Cristian de Gracia' },
    },
    {
      text: 'Tweet de prueba',
      user: { username: 'cfres', fullname: 'Cristian de Gracia' },
    },
    {
      text: 'Tweet de prueba',
      user: { username: 'cfres', fullname: 'Cristian de Gracia' },
    },
    {
      text: 'Tweet de prueba',
      user: { username: 'cfres', fullname: 'Cristian de Gracia' },
    },
  ]);

  constructor() {}

  getTweets(): Observable<Tweet[]> {
    return this.tweets$.asObservable();
  }
}
