import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Stock } from '../models/stock';
import { ActivityService } from '../service/activity.service';
import { Observable } from 'rxjs';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { trade } from '../models/trade';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent implements OnInit {

  stocks: trade[] = [];
  astocks: trade[] = [];
  tradedList: trade[] = [];
  config: any;
  displayedColumns: string[] = ['tradeId', 'tickerid','tradeType','quantity', 'purchasePrice','purchaseDate'];
  dataSource: any = null;
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  searchTerm: string = '';
  obs!: Observable<trade[]>;

  toggleFlag:boolean = true;


  constructor(private historyService: ActivityService, private _liveAnnouncer: LiveAnnouncer,
    private tokenStorage: TokenStorageService) {}

  getTradeHistory(){
    this.historyService.getTradeHistory(this.tokenStorage.getUser().id).subscribe(
      data => {
        console.log(data);
        this.tradedList = data;
        this.dataSource = new MatTableDataSource<trade>(this.tradedList);
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      }
    );
  }



  ngOnInit(): void {
    this.getTradeHistory();
    
  }

  ngAfterViewInit() {
    
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.target.value.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState:any) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  sortData(sort: any) {
    const data = this.stocks.slice();
    if (!sort.active || sort.direction === '') {
      this.stocks = data;
      return;
    }

    this.stocks = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'trade Id':
          return compare(a.tradeId, b.tradeId, isAsc);
        case 'tickerid':
          return compare(a.tickerid, b.tickerid, isAsc);
        case 'tradetype':
          return compare(a.tradeType, b.tradeType, isAsc);
        case 'quantity':
          return compare(a.quantity, b.quantity, isAsc);
        case 'purchaseprice':
          return compare(a.purchasePrice, b.purchasePrice, isAsc);
        case 'purchasedate':
          return compare(a.purchaseDate, b.purchaseDate, isAsc);
        default:
          return 0;
      }
    });
  }
  
  openSearch():void {
    if(this.toggleFlag){
      document.getElementById("listSearch")?.focus();
      this.toggleFlag = false
    }
    else{
      document.getElementById("listSearch")?.blur();
      this.toggleFlag = true
    }
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}




  



 


