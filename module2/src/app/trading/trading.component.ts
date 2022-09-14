import { Component, OnInit } from '@angular/core';
import { GlobalStock } from '../models/global-stock';
import { GlobalstockService } from '../services/globalstock.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
  constructor(private stockService:GlobalstockService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.stocks = this.stockService.getGlobalStocks()
  }

  open(content:any, stock:GlobalStock) {
    this.selectedStock = stock
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
