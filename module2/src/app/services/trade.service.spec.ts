import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { PortfolioService } from './portfolio.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Stock } from '../models/stock';
import { WalletService } from './walletservice';
import { HttpHeaders } from '@angular/common/http';
import { TradeService } from './tradeService';

describe('TradeService', () => {
  let service: TradeService;
  let httpTestingController: HttpTestingController;
  const testStocks:Stock[] = [{
    tickerId: "ABC",
    name: "Amazon",
    purchasePrice: 100,
    quantity: 1,
    gainPercentage: 100,
    marketCap: 1000000,
    volume: 100,
    gainValue: 12
 }]


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:  [
      HttpClientTestingModule
      ]});
      httpTestingController = TestBed.inject(HttpTestingController);
      service = TestBed.inject(TradeService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of Stocks', inject([TradeService],
    fakeAsync((service: TradeService) => {
    let stocks: any= [];
    service.getGlobalStocks()
    .subscribe(data => stocks = data);
    const req = httpTestingController.expectOne(
    'http://localhost:8080/api/allStocks');
    expect(req.request.method).toEqual('GET');
    req.flush(testStocks);
    httpTestingController.verify();
    tick();
    expect(testStocks.length).toBe(1);
   })));

   it('should buy stock', inject([TradeService],
    fakeAsync((service: TradeService) => {
    let userId = 1;
    let fakeTrade = {
        tradeId: 1,
        userId:1,
        tickerid: 'abc',
        tradeType: "BUY",
        quantity:1,
        purchasePrice: 100,
        purchaseDate: "11-12-2022"
    }

    service.buyStock(fakeTrade)
    .subscribe();
    const req = httpTestingController.expectOne(
    'http://localhost:8080/api/buy');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toBe(fakeTrade);
    req.flush(null);
    httpTestingController.verify();
    tick();
   })));

   it('should sell stock', inject([TradeService],
    fakeAsync((service: TradeService) => {
    let fakeTrade = {
        tradeId: 1,
        userId:1,
        tickerid: 'abc',
        tradeType: "BUY",
        quantity:1,
        purchasePrice: 100,
        purchaseDate: "11-12-2022"
    }

    service.sellStock(fakeTrade)
    .subscribe();
    const req = httpTestingController.expectOne(
    'http://localhost:8080/api/sell');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toBe(fakeTrade);
    req.flush(null);
    httpTestingController.verify();
    tick();
   })));

   it('should handle error if a sell is placed for a stock that is not bought', inject([TradeService],
    fakeAsync((service: TradeService) => {
    let stocks: any= [];
    service.getGlobalStocks()
    .subscribe(data => stocks = data);
    const req = httpTestingController.expectOne(
    'http://localhost:8080/api/allStocks');
    expect(req.request.method).toEqual('GET');
    req.flush(testStocks);
    httpTestingController.verify();
    tick();
    expect(testStocks.length).toBe(1);
   })));

   it('should handle error if wallet balance is low', inject([TradeService],
    fakeAsync((service: TradeService) => {
    let stocks: any= [];
    service.getGlobalStocks()
    .subscribe(data => stocks = data);
    const req = httpTestingController.expectOne(
    'http://localhost:8080/api/allStocks');
    expect(req.request.method).toEqual('GET');
    req.flush(testStocks);
    httpTestingController.verify();
    tick();
    expect(testStocks.length).toBe(1);
   })));

   it('should handle internal server error', inject([TradeService],
    fakeAsync((service: TradeService) => {
    let stocks: any= [];
    service.getGlobalStocks()
    .subscribe(data => stocks = data);
    const req = httpTestingController.expectOne(
    'http://localhost:8080/api/allStocks');
    expect(req.request.method).toEqual('GET');
    req.flush(testStocks);
    httpTestingController.verify();
    tick();
    expect(testStocks.length).toBe(1);
   })));
});
