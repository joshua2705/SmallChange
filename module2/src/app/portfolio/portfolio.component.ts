import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { PortfolioService } from '../services/portfolio.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  portfolio: Stock[] = [];
  obs!: Observable<Stock[]>;
  invested: number = 0;
  current: number = 0;
  totalReturns: number = 0;
  displayedColumns: string[] = ['symbol', 'quantity', 'exg_price', 'total_investment', 'percent_change', 'price_change'];

  toggleFlag: boolean = true;

  dataSource = new MatTableDataSource<Stock>(this.portfolioService.getPortFolio());
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchTerm: string = '';
  calculated: boolean = false;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.obs = this.dataSource.connect();
    this.portfolioService.getStocks().subscribe(
      data => {
        this.portfolio = data;
        console.log(data);
        let i = 0;
        console.log(this.portfolio.length);
        for (i = 0; i < this.portfolio.length; i++) {
          this.invested += this.portfolio[i].purchasePrice;
          console.log(this.portfolio[i].purchasePrice)
          let temp = (this.portfolio[i].gainPercentage/100)*this.portfolio[i].purchasePrice;
          if(this.portfolio[i].gainPercentage < 0){
            this.totalReturns -=temp ;
            this.portfolio[i].gainValue = -temp;
          }
          else{
            this.totalReturns +=temp ;
            this.portfolio[i].gainValue = temp;
          }
        }
        this.current = this.invested + this.totalReturns;
        this.calculated = true;
        console.log(this.invested + " " + this.totalReturns)
      }
    );
    //this.portfolio = this.portfolioService.getPortFolio()

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.target.value.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openSearch(): void {
    if (this.toggleFlag) {
      document.getElementById("searchStocks")?.focus();
      this.toggleFlag = false
    }
    else {
      document.getElementById("searchStocks")?.blur();
      this.toggleFlag = true
    }
  }
}


