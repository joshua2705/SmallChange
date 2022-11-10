import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LandingPageComponent
      ],
    }).compileComponents();
  });

  it('should create the landing page', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title "Invest In"`, () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.text h1')?.textContent).toBe('Invest In Mutual FundsStocksGold Bonds');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.text h1')?.textContent).toBe('Invest In Mutual FundsStocksGold Bonds');
  });

  it('should navigate to register page', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.text h1')?.textContent).toBe('Invest In Mutual FundsStocksGold Bonds');
  });

  it('should navigate to login page', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.text h1')?.textContent).toBe('Invest In Mutual FundsStocksGold Bonds');
  });
});
