import { Component, OnInit } from '@angular/core';
import { WalletService } from '../services/walletservice';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  balance: number = -1;
  investedAmount: number = - 1;

  constructor(
    private walletService: WalletService
  ) { }

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance(){
    this.walletService.getBalance().subscribe(
      data => {
        console.log(data.balance);
        this.balance = data.balance;
        this.investedAmount = data.investedamount;

      }
    );

  }

  withdrawMoney(value: any){
    console.log(value);

  }

}
