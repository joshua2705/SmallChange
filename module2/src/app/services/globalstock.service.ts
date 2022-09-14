import { Injectable } from '@angular/core';
import { GlobalStock } from '../models/global-stock';

@Injectable({
  providedIn: 'root'
})
export class GlobalstockService {

  stocks:GlobalStock[] = [
   {symbol:"AMZN",name:"Amazon",marketCap:1231243,price:1623,gain:-2.33},
   {symbol:"TSLA",name:"Tesla",marketCap:11243,price:1000,gain:3.67},
   {symbol:"BBBY",name:"Bed Bath and Beyond",marketCap:231,price:12,gain:30},
   {symbol:"JPM",name:"J.P.Morgan",marketCap:189343,price:1230,gain:-1.5}
  ]
  constructor() { }

  getGlobalStocks(){
    return this.stocks
  }
}
