import { User } from './../types/user.type';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUser(): Observable<User> {
    return of({
      fullname: 'Cristian de Gracia Nuero',
      username: 'crisdegraciadev',
    });
  }
}
