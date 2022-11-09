import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalStock } from '../models/global-stock';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TradeService } from '../services/tradeService';
import { PortfolioService } from '../services/portfolio.service';
import { WalletService } from '../services/walletservice';
import { Stock } from '../models/stock';
import { TokenStorageService } from '../services/token-storage.service';
import { trade } from '../models/trade';


@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.css']

})
export class TradingComponent implements OnInit {

  stocks:GlobalStock[] = [];
  selectedStock:GlobalStock = new GlobalStock("","",0,0,0,0);
  closeResult:string = ""
  fund:number=234000
  thisStock:number=500
  searchTerm:string=""
  portfolio: Stock[] = [];
  obs1!: Observable<Stock[]>;

  toggleFlag:boolean = true
  
  obs!: Observable<GlobalStock[]>;
  displayedColumns: string[] = ['ticker', 'price','gainPercentage','marketCap','volume'];
  dataSource: any = null;
  balance: number = -1;

  inputAmount: number = -1;

  constructor(private tradeSer: TradeService,
    private portfolioService: PortfolioService,
    private walletService: WalletService,
    private modalService: NgbModal, private _snackBar: MatSnackBar,
    private tokenStorage: TokenStorageService) { }


  
  @ViewChild(MatPaginator)paginator!: MatPaginator;

  
  ngOnInit(): void {
    this.tradeSer.getGlobalStocks().subscribe(
      data => {
        this.stocks = data;
        this.dataSource = new MatTableDataSource<GlobalStock>(this.stocks);
        this.obs = this.dataSource.connect();
      }
    );
    this.walletService.getBalance().subscribe(
      data => {
        this.balance = data.balance;
      }
    );
    this.portfolioService.getStocks().subscribe(
      data => {
        this.portfolio = data;
      }
    )
   
  
  }

  valid: boolean = false;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  amountString: string = "";
  validateBuy(event:any){
    //if()
    if(event!=null){
      console.log(event?.target?.value);
      this.inputAmount =  event?.target?.value;
   // this.amountString = event;
    }
    
    if(this.balance < this.inputAmount){
      this.valid = false;
    }
    else{
      this.valid = true;
    }

  }

  callService(){
    //console.log("in call Service " + this.inputAmount + " " + this.balance);
    if(this.balance < this.inputAmount){
      //alert("jh");
      this._snackBar.open("You don't have sufficient balance","",{duration:3000})
    }
    else{
      let dob = new Date();
      const date = dob.getDate();
      const month = dob.getMonth() + 1;
      const year = dob.getFullYear();
      const dateOfBirth = `${year}-${month}-${date}`;
      console.log(dateOfBirth);
      let body1 = new trade(-1,this.tokenStorage.getUser().id,this.selectedStock.id,
      "BUY", this.inputAmount/this.selectedStock.price, this.inputAmount, dateOfBirth );
    
    this.tradeSer.buyStock(body1).subscribe(
      data => {
        
      }
    );
    }
  }

  callSellTrade(){
    
   
    
      let purhaseCurrentDate = new Date();
      const date = purhaseCurrentDate.getDate();
      const month = purhaseCurrentDate.getMonth() + 1;
      const year = purhaseCurrentDate.getFullYear();
      const currentDate = `${year}-${month}-${date}`;
      
      let postInput = new trade(-1,this.tokenStorage.getUser().id,this.selectedStock.id,
      "SEL", this.selectedQuantity, this.selectedStock.price, currentDate );
    
    this.tradeSer.sellStock(postInput).subscribe(
      data => {
        
      }
    );
    
  }
  selectedQuantity: number=0;
  selectedCurrentValue: number = 0;
  
  open(content:any, stock:GlobalStock) {
    this.selectedCurrentValue = 0;
    this.selectedQuantity = 0;
    this.selectedStock = stock;
    this.portfolio.forEach((value: Stock, ind: number) => {
        if(this.selectedStock.id == value.tickerId){
            this.selectedQuantity = value.quantity;
            this.selectedCurrentValue = value.quantity * this.selectedStock.price;
        }
    });
    
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  openBuyModal(buymodal:any){
      this.modalService.open(buymodal, {ariaLabelledBy: 'buy-modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  openSellModal(sellmodal:any){
    this.modalService.open(sellmodal, {ariaLabelledBy: 'sell-modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  prefix:boolean = false
  showPrefix():void{
    this.prefix = true
  }
  hidePrefix():void{
    this.prefix = false
  }

  boughtToast(){
    this._snackBar.open("Transaction Successful","",{duration:3000});
  }

  soldToast(){
    this._snackBar.open("Stocks Sold successfully","",{duration:3000})
  }
}
