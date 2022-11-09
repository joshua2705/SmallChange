import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { TokenStorageService } from '../services/token-storage.service';

const PORTFOLIO_API = 'http://localhost:8080/tradeHistory/';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {

  
 

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {}

  private httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization', `Bearer `+ this.tokenStorage.getToken())
  };

  getTradeHistory(userId: number): Observable<any> {
    //this.tokenStorage.getUser().id;
    return this.http.get(PORTFOLIO_API + userId, this.httpOptions);
    
  }
}
