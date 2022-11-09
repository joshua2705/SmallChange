import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { PortfolioService } from './portfolio.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Stock } from '../models/stock';
import { WalletService } from './walletservice';
import { HttpHeaders } from '@angular/common/http';

describe('WalletService', () => {
  let service: WalletService;
  let httpTestingController: HttpTestingController;
  const testWallet:any[] = [{accountid : "123",
		userid : 1,
		balance : 100,
		investedamount :1234}]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:  [
      HttpClientTestingModule
      ]});
      httpTestingController = TestBed.inject(HttpTestingController);
      service = TestBed.inject(WalletService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return balance', inject([WalletService],
    fakeAsync((service: WalletService) => {
    let wallet: any= [];
    let userId = 1;
    service.getBalance(userId)
    .subscribe(data => wallet = data);
    const req = httpTestingController.expectOne(
    'http://localhost:8080/api/getWallet/'+userId);
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
    // Respond with mock data, causing Observable to resolve.
    req.flush(testWallet);
    // Assert that there are no outstanding requests.
    httpTestingController.verify();
    // Cause all Observables to complete and check the results
    tick();
    expect(wallet[0].balance).toBe(100);
   })));

   it('should update balance', inject([WalletService],
    fakeAsync((service: WalletService) => {
    let wallet: any= [];
    let userId = 1;
    let value = 100;
    let httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type','application/json')
      .set('Authorization', `Bearer `+ "hjgsad,sdkhskdsafdkjsadkjgkjg")
    };
    service.updateBalance(value,userId )
    .subscribe();
    const req = httpTestingController.expectOne(
    'http://localhost:8080/api/updateWallet/'+userId + "/"+ value);
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('PUT');
    // expect(req.request.headers).toBe(httpOptions);
    // Respond with empty data.
    // Respond with mock data, causing Observable to resolve.
    req.flush(null);
    // Assert that there are no outstanding requests.
    httpTestingController.verify();
    // Cause all Observables to complete and check the results
    tick();
   })));
});
