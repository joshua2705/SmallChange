import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Wallet } from '../models/wallet';
import { WalletService } from '../services/walletservice';

import { WalletComponent } from './wallet.component';

describe('WalletComponent', () => {
  let component: WalletComponent;
  let fixture: ComponentFixture<WalletComponent>;

  
  let getWalletSpy: any;
  let updateBalanceSpy: any;

  const wallet: Wallet = {
    accountid: 1,
    userid: 3,
    balance: 2340,
    investedamount: 100
  };

  beforeEach(async () => {
    let getWalletService: any = jasmine.createSpyObj('WalletService',['getBalance','updateBalance']);
    getWalletSpy = getWalletService.getBalance.and.callFake((param: Number) => {
      return of(wallet);
    });
    updateBalanceSpy = getWalletService.updateBalance.and.callFake((param: Number, param1: Number)=>{
      return of(true);
    });
    await TestBed.configureTestingModule({
      declarations: [ WalletComponent ],
      providers: [
        { provide: WalletService, useValue: getWalletService
          }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get balance data', () => {
    component.getBalance();
    expect(component.balance).toBe(2340);
  })

  it('should update balance while withdrawing money', () => {
   
    component.withdrawMoney(20);
    expect(component.balance).toBe(2340);

  })

  it('should update balance while depositing money', () => {
    component.depositMoney(20);
    expect(component.balance).toBe(2340);
    
  })
});
