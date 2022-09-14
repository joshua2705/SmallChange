import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameFormControlComponent } from './username-form-control.component';

describe('UsernameFormControlComponent', () => {
  let component: UsernameFormControlComponent;
  let fixture: ComponentFixture<UsernameFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
