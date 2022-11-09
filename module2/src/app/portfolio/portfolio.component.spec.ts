import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Stock } from '../models/stock';
import { PortfolioService } from '../services/portfolio.service';

import { PortfolioComponent } from './portfolio.component';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;
  let getStocksSpy: any;
  const mockPortfolio: Stock[] = [{
    "tickerId":"S01",
    "name":"ABC",
    "purchasePrice":230,
    "quantity":1,
    "gainPercentage":3,
    "marketCap":2,
    "volume":3000,
    "gainValue":2
  }];
  beforeEach(async () => {
    let portfolioService: any = jasmine.createSpyObj('PortfolioService',['getStocks']);
    getStocksSpy = portfolioService.getStocks.and.callFake((param: number) => {
        return of(mockPortfolio);
    });
    await TestBed.configureTestingModule({
      declarations: [ PortfolioComponent ],
      providers: [
        { provide: PortfolioService, useValue: portfolioService
          }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get current portfolio', () => {
    component.ngOnInit();
    expect(component.portfolio[0].tickerId).toBe('S01');
  })

});
