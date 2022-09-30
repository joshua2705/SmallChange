import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalStock } from '../models/global-stock';
import { GlobalstockService } from '../services/globalstock.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.css']
})
export class TradingComponent implements OnInit {

  stocks:GlobalStock[] = []
  selectedStock:GlobalStock = new GlobalStock("","",0,0,0)
  closeResult:string = ""
  fund:number=234000
  thisStock:number=500
  searchTerm:string=""

  toggleFlag:boolean = true
  
  obs!: Observable<GlobalStock[]>;
  displayedColumns: string[] = ['symbol', 'quantity','exg_price','total_investment','percent_change', 'price_change'];


  constructor(private stockService:GlobalstockService,private modalService: NgbModal) { }


  dataSource = new MatTableDataSource<GlobalStock>(this.stockService.getGlobalStocks());
  @ViewChild(MatPaginator)paginator!: MatPaginator;

  
  ngOnInit(): void {
    //this.stocks = this.stockService.getGlobalStocks()
    this.obs = this.dataSource.connect();
    this.stocks =  this.stockService.getGlobalStocks()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  open(content:any, stock:GlobalStock) {
    this.selectedStock = stock
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  applyFilter(filterValue: any) {
    console.log("Received", filterValue)
    this.dataSource.filter = filterValue;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
