import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Wallet } from '../models/wallet';
import { WalletService } from '../services/walletservice';

import { WalletComponent } from './wallet.component';

describe('WalletComponent', () => {
  let component: WalletComponent;
  let fixture: ComponentFixture<WalletComponent>;

  let getWalletSpy: any;
  const wallet: Wallet = {
    accountid: 1,
    userid: 3,
    balance: 2340,
    investedamount: 100
  };

  beforeEach(async () => {
    let getWalletService: any = jasmine.createSpyObj('WalletService',['getBalance']);
    getWalletSpy = getWalletService.getBalance.and.callFake((param: Number) => {
      return of(wallet);
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
});
