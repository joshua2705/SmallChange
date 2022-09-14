import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio:Stock[] = []
  invested:number = 0;
  current:number=0;
  totalReturns:number=0;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getPortfolio();
    let i=0;
    for( i=0; i<this.portfolio.length; i++){
        this.invested += this.portfolio[i].totalInvestment;
        this.current += this.portfolio[i].priceChange;
    }
    this.totalReturns = this.invested + this.current

  }

  getPortfolio() {
     this.portfolio= this.portfolioService.getPortFolio()
  }




}
