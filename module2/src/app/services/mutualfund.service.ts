import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { __classPrivateFieldIn } from 'tslib';
import { MutualFund } from '../models/mutual-fund';



@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  portfolio: MutualFund[] = [{
     fundId: "AXBG",
     fundName: "AXIS BANK GROWTH",
     investedAmount: 1000,
     gainPercentage: 2.6,
     currentValue: 1026
  }]

  constructor() { }



  getMutualFunds():MutualFund[] {
      return this.portfolio;
  }
}
