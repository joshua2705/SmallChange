import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { TokenStorageService } from '../services/token-storage.service';

const PORTFOLIO_API = 'http://localhost:8080/api/getWallet/';

@Injectable({
  providedIn: 'root',
})
export class WalletService {

  
 

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {}

  private httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization', `Bearer `+ this.tokenStorage.getToken())
  };

  getBalance(): Observable<any> {
    //this.tokenStorage.getUser().id;
    return this.http.get(PORTFOLIO_API + this.tokenStorage.getUser().id, this.httpOptions);
    
  }
}
