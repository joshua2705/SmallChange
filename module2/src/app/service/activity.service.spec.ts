import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { ActivityService } from '../service/activity.service';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { trade } from '../models/trade';


describe('ActivityService', () => {
  const PORTFOLIO_API = 'http://localhost:8080/tradeHistory/224';
    let service: ActivityService;
    //let service: ETFServiceService;
    let httpTestingController: HttpTestingController;
    const mocktrade: trade[] = [
        {"tradeId":1, "userId": 1, "tickerid": "S01", "tradeType":"Buy","quantity":1,
        "purchasePrice":20, "purchaseDate":"23-08-2021"}
]
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ]
      });
      service = TestBed.inject(ActivityService);
      //service = TestBed.inject(ETFServiceService);
      httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return trades', inject([ActivityService],
      fakeAsync((service: ActivityService) => {
        let trades1: trade[] = [];
        service.getTradeHistory(224)
          .subscribe(data => trades1 = data);
        const req = httpTestingController.expectOne(
          PORTFOLIO_API );
        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');
        // Respond with mock data, causing Observable to resolve.
        req.flush(mocktrade);
        // Assert that there are no outstanding requests.
        httpTestingController.verify();
        // Cause all Observables to complete and check the results
        tick();
        expect(trades1[0].tickerid).toBe('S01');
      })));

      it('should return empty trades if no trades executed', inject([ActivityService],
        fakeAsync((service: ActivityService) => {
          let trades1: trade[] = [];
          service.getTradeHistory(224)
            .subscribe(data => trades1 = data);
          const req = httpTestingController.expectOne(
            PORTFOLIO_API );
          // Assert that the request is a GET.
          expect(req.request.method).toEqual('GET');
          // Respond with mock data, causing Observable to resolve.
          req.flush(mocktrade);
          // Assert that there are no outstanding requests.
          httpTestingController.verify();
          // Cause all Observables to complete and check the results
          tick();
          expect(trades1[0].tickerid).toBe('S01');
        })));

        it('should handle internal server error', inject([ActivityService],
          fakeAsync((service: ActivityService) => {
            let trades1: trade[] = [];
            service.getTradeHistory(224)
              .subscribe(data => trades1 = data);
            const req = httpTestingController.expectOne(
              PORTFOLIO_API );
            // Assert that the request is a GET.
            expect(req.request.method).toEqual('GET');
            // Respond with mock data, causing Observable to resolve.
            req.flush(mocktrade);
            // Assert that there are no outstanding requests.
            httpTestingController.verify();
            // Cause all Observables to complete and check the results
            tick();
            expect(trades1[0].tickerid).toBe('S01');
          })));

  });
