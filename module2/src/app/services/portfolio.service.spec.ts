import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { PortfolioService } from './portfolio.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Stock } from '../models/stock';

describe('PortfolioService', () => {
  let service: PortfolioService;
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
      service = TestBed.inject(PortfolioService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return stocks', inject([PortfolioService],
    fakeAsync((service: PortfolioService) => {
    let stocks: Stock[] = [];
    let userId = 1;
    service.getStocks(userId)
    .subscribe(data => stocks = data);
    const req = httpTestingController.expectOne(
    'http://localhost:8080/smallchange/position/Stocks/'+userId);
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
    // Respond with mock data, causing Observable to resolve.
    req.flush(testStocks);
    // Assert that there are no outstanding requests.
    httpTestingController.verify();
    // Cause all Observables to complete and check the results
    tick();
    expect(stocks.length).toBe(1);
   })));
});
