import { Injectable } from '@angular/core';
import { User } from '../models/user'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[]
  constructor() {
    this.users = [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'sample@123.com',
      register: new Date('2010-3-2'),
      hide: true
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'sample@123.com',
      hide: true
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'sample@123.com',
      hide: false
    }
    ]
  }

  getUsers():Observable<User[]>{
    return of(this.users)
  }

}
