import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users:User[] = [{username:"Joshua",password:"Awesome"},{username:"Admin",password:"Admino"}]
  constructor() { }

  getUsers():Observable<User[]>{
    return of(this.users)
  }
}
