import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { TradingComponent } from './trading/trading.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { NavbarLinkComponent } from './common/navbar-link/navbar-link.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { UsernameFormControlComponent } from './login/username-form-control/username-form-control.component';

import { PasswordFormControlComponent } from './login/password-form-control/password-form-control.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    PortfolioComponent,
    TradeHistoryComponent,
    TradingComponent,
    NavbarComponent,
    NavbarLinkComponent
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
