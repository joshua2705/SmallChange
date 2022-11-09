import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { __classPrivateFieldIn } from 'tslib';
import { Stock } from '../models/stock';
import { TokenStorageService } from './token-storage.service';

const PORTFOLIO_API = 'http://localhost:8080/smallchange/position/';


@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  portfolio: Stock[] = []

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  private httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization', `Bearer `+ this.tokenStorage.getToken())
  };
  
  getPortFolio(): any {
    return this.portfolio;
  }
  getStocks():Observable<Stock[]> {
      return this.http.get<Stock[]>(PORTFOLIO_API + 'Stocks/' + this.tokenStorage.getUser().id, this.httpOptions);
  }
}
