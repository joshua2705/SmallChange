import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users = [{username:"Joshua",password:"Awesome"},{username:"Admin",password:"Admino"}]
  constructor() { }
  getUsers():Observable<[]>{
    return (this.users)
  }
}
