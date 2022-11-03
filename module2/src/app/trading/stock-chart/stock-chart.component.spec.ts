import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';

import { StockChartComponent } from './stock-chart.component';

describe('StockChartComponent', () => {
  let component: StockChartComponent;
  let fixture: ComponentFixture<StockChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StockChartComponent ],
      imports: [ ChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
