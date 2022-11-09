import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { trade } from '../models/trade';
import { TradeService } from '../services/tradeService';
import { ActivityService } from '../service/activity.service';
import { TradeHistoryComponent } from './trade-history.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';




describe('TradeHistoryComponent', () => {
  let component: TradeHistoryComponent;
  let fixture: ComponentFixture<TradeHistoryComponent>;
  let httpClient: HttpClient;
  const mockStock: trade[] = [{"tradeId":1, "userId": 1, "tickerid": "S01", "tradeType":"Buy","quantity":1,
  "purchasePrice":20, "purchaseDate":"23-08-2021"}]
  let getTradeHistorySpy: any;

  beforeEach(async () => {
    let tradeService: any = jasmine.createSpyObj('ActivityService', ['getTradeHistory']);


    getTradeHistorySpy = tradeService.getTradeHistory.and.callFake((param: number) => {
        return of(mockStock);
        });
    

    


    await TestBed.configureTestingModule({
      declarations: [ TradeHistoryComponent],
    
      providers: [
        { provide: ActivityService, useValue: tradeService
          }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get trade History ', () => {
    component.getTradeHistory();
    //const tag = fixture.nativeElement.querySelector('table');
    expect(component.tradedList[0].tickerid).toBe('S01');
  })

  

  
});
