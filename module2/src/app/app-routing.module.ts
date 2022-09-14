import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterFormComponent } from './registration/registration.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { TradingComponent } from './trading/trading.component';

const routes: Routes = [
  {path:"", component:PortfolioComponent},
  {path:'registration', component: RegisterFormComponent },
  {path:'portfolio', component: PortfolioComponent},
  {path:'activity', component: TradeHistoryComponent},
  {path:'trade', component: TradingComponent},
  {path:'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
