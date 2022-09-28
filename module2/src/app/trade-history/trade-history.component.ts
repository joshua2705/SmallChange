import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Stock } from '../models/stock';
import { ActivityService } from '../service/activity.service';
import { Observable } from 'rxjs';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';


@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent implements OnInit {



  
  stocks: Stock[] = [];
  astocks: Stock[] = [];
  config: any;
  displayedColumns: string[] = ['symbol', 'orderDate','transactionDate','type','quantity', 'exgPrice'];
  dataSource = new MatTableDataSource<Stock>(this.historyService.getStockActivity());
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  searchTerm: string = '';
  obs!: Observable<Stock[]>;


  constructor(private historyService: ActivityService, private _liveAnnouncer: LiveAnnouncer) {}



  ngOnInit(): void {
    this.stocks = this.historyService.getStockActivity();
    this.obs = this.dataSource.connect();

    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
        case 'symbol':
          return compare(a.symbol, b.symbol, isAsc);
        case 'orderDate':
          return compare(a.orderDate, b.orderDate, isAsc);
        case 'transactionDate':
          return compare(a.transactionDate, b.transactionDate, isAsc);
        case 'type':
          return compare(a.type, b.type, isAsc);
        case 'quantity':
          return compare(a.quantity, b.quantity, isAsc);
        default:
          return 0;
      }
    });
  }
  
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}




  



 


