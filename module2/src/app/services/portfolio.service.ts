import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';

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

  constructor() { }

  getPortFolio(): any {
    return this.portfolio;
  }
}
