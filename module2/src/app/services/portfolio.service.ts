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
  portfolio: Stock[] = [{
    symbol: "HDFCBANK",
    quantity: 2,
    orderDate: '',
    transactionDate: '',
    exgPrice: 0,
    totalInvestment: 400.00,
    type: '',
    percentChange: +28.25,
    priceChange: +55.00,
  }, {
    symbol: "HINDUNILVR",
    quantity: 1,
    orderDate: '',
    transactionDate: '',
    exgPrice: 0,
    totalInvestment: 666.00,
    type: '',
    percentChange: +8.84,
    priceChange: +58.90,
  }, {
    symbol: "ASIANPAINTS",
    quantity: 4,
    orderDate: '',
    transactionDate: '',
    exgPrice: 0,
    totalInvestment: 876.00,
    type: '',
    percentChange: -2.37,
    priceChange: -20.78,
  },{
    symbol: "ASIANPAINTS",
    quantity: 4,
    orderDate: '',
    transactionDate: '',
    exgPrice: 0,
    totalInvestment: 876.00,
    type: '',
    percentChange: -2.37,
    priceChange: -20.78,
  }, {
    symbol: "ASIANPAINTS",
    quantity: 4,
    orderDate: '',
    transactionDate: '',
    exgPrice: 0,
    totalInvestment: 876.00,
    type: '',
    percentChange: -2.37,
    priceChange: -20.78,
  }, {
    symbol: "ASIANPAINTS",
    quantity: 4,
    orderDate: '',
    transactionDate: '',
    exgPrice: 0,
    totalInvestment: 876.00,
    type: '',
    percentChange: -2.37,
    priceChange: -20.78,
  }, {
    symbol: "ASIANPAINTS",
    quantity: 4,
    orderDate: '',
    transactionDate: '',
    exgPrice: 0,
    totalInvestment: 876.00,
    type: '',
    percentChange: -2.37,
    priceChange: -20.78,
  }]

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  private httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization', `Bearer `+ this.tokenStorage.getToken())
  };
  getPortFolio(): any {
    return this.portfolio;
  }
  getStocks():Observable<any> {
      return this.http.get(PORTFOLIO_API + 'Stocks', this.httpOptions);
  }
}
