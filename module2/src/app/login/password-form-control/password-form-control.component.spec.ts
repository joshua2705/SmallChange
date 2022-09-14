import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFormControlComponent } from './password-form-control.component';

describe('PasswordFormControlComponent', () => {
  let component: PasswordFormControlComponent;
  let fixture: ComponentFixture<PasswordFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
