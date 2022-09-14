import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { ActivityService } from '../service/activity.service';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent implements OnInit {
  stocks: Stock[] = [];
  astocks: Stock[] = [];
  config: any;
  constructor(private historyService: ActivityService) {
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: 0
    };
   }



  ngOnInit(): void {
    this.stocks = this.historyService.getStockActivity();
    this.config.totalItems = this.stocks.length;
    for (let i = 0; i<2; i++){
      this.astocks.push(this.stocks[i]);
     
  
    }
  }

  


pageChanged(event: any){
  console.log(event);
  let pnum = event;
  this.config.currentPage = event;
  let snum = (pnum - 1)*2;
  this.astocks = [];
  for (let i = snum; i<snum+2; i++){
    this.astocks.push(this.stocks[i]);
    console.log(i+ " "+this.astocks) ;

  }
  
 
}
}
