import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  stocks: Stock[] = [
    {
      symbol: 'AAPL',
      quantity: 200,
      orderDate: '29/07/2022',
      transactionDate: '30/07/2022',
      exgPrice: 65,
      type: 'short',
      totalInvestment: 0,
      percentChange:0,
      priceChange:0

    },
    {
      symbol: 'GME',
      quantity: 300,
      orderDate: '23/06/2022',
      transactionDate: '23/06/2022',
      exgPrice: 85,
      type: 'sell',
      totalInvestment: 0,
      percentChange:0,
      priceChange:0
    },
    {
      symbol: 'GME',
      quantity: 400,
      orderDate: '13/05/2022',
      transactionDate: '22/05/2022',
      exgPrice: 75,
      type: 'buy',
      totalInvestment: 0,
      percentChange:0,
      priceChange:0
    },
    {
      symbol: 'LOW',
      quantity: 300,
      orderDate: '12/03/2022',
      transactionDate: '12/04/2022',
      exgPrice: 65,
      type: 'short',
      totalInvestment: 0,
      percentChange:0,
      priceChange:0
    },
  ];

  constructor() {}

  getStockActivity(): Stock[] {
    return this.stocks;
  }
}
