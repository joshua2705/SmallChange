import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalStock } from '../models/global-stock';
import { trade } from '../models/trade';

const url = 'http://localhost:8080/api/allStocks';
const postUrl = 'http://localhost:8080/api/buy';
const postSellUrl = 'http://localhost:8080/api/sell';
@Injectable({
  providedIn: 'root'
})
export class TradeService {
    
  stocks:GlobalStock[] = [
   
  ]
  constructor(private http: HttpClient) { }

  getGlobalStocks(): Observable<GlobalStock[]>{
    return this.http.get<GlobalStock[]>(url);
  }

  buyStock(trade1: trade): Observable<any>{
    return this.http.post(postUrl, trade1);
  }

  sellStock(trade1: trade): Observable<any>{
    return this.http.post(postSellUrl, trade1 ) 
  }

}
