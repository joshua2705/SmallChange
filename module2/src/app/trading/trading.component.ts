import { Component, OnInit } from '@angular/core';
import { GlobalStock } from '../models/global-stock';
import { GlobalstockService } from '../services/globalstock.service';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.css']
})
export class TradingComponent implements OnInit {

  stocks:GlobalStock[] = []
  constructor(private stockService:GlobalstockService) { }

  ngOnInit(): void {
    this.stocks = this.stockService.getGlobalStocks()
  }

}
