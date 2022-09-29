import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { PortfolioService } from '../services/portfolio.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  portfolio:Stock[] = [];
  obs!: Observable<Stock[]>;
  invested:number = 0;
  current:number=0;
  totalReturns:number=0;
  displayedColumns: string[] = ['symbol', 'quantity','exg_price','total_investment','percent_change', 'price_change'];

  toggleFlag:boolean = true;

  dataSource = new MatTableDataSource<Stock>(this.portfolioService.getPortFolio());
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  searchTerm: string = '';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.obs = this.dataSource.connect();
    this.portfolio = this.portfolioService.getPortFolio()
    let i=0;
    for( i=0; i<this.portfolio.length; i++){
        this.invested += this.portfolio[i].totalInvestment;
        this.totalReturns += this.portfolio[i].priceChange;
    }
    this.current = this.invested + this.totalReturns
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChange(){
    if(this.dataSource.paginator)
      this.dataSource.paginator.firstPage()
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.target.value.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  openSearch():void {
    if(this.toggleFlag){
      document.getElementById("searchStocks")?.focus();
      this.toggleFlag = false
    }
    else{
      document.getElementById("searchStocks")?.blur();
      this.toggleFlag = true
    }
  }
}


