import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
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
    private walletService: WalletService, private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance(){
    this.walletService.getBalance(this.tokenStorage.getUser().id).subscribe(
      data => {
        console.log(data.balance);
        this.balance = data.balance;
        this.investedAmount = data.investedamount;

      }
    );

  }

  withdrawMoney(value: any){
    console.log(value);
    value = Number(value);
    if (this.balance >= value){
      let valueNew = this.balance - value;
      console.log(valueNew);
      this.walletService.updateBalance(valueNew, this.tokenStorage.getUser().id).subscribe(
        data => {
          this.getBalance();
          window.location.reload();
        },
        error => {

        }
      );

    }
    else{
      alert("balance is less than withdraw amount")
    }


  }

  depositMoney(value: any){
    console.log(value);
    value = Number(value);
    if (true){
      let valueNew = this.balance + value;
      console.log(valueNew);
      this.walletService.updateBalance(valueNew, this.tokenStorage.getUser().id).subscribe(
        data => {
          this.getBalance();
          window.location.reload();
        },
        error => {

        }
      );

    }



  }

}
