import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeModalComponent } from './trade-modal.component';

describe('TradeModalComponent', () => {
  let component: TradeModalComponent;
  let fixture: ComponentFixture<TradeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
