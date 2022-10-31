import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './registration/registration.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { TradingComponent } from './trading/trading.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { NavbarLinkComponent } from './common/navbar-link/navbar-link.component';
import { HeaderBarComponent } from './common/header-bar/header-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { SearchPipe } from './pipes/search.pipe';
import { FooterComponent } from './common/footer/footer.component';

import { MatSortModule } from '@angular/material/sort';

import { TableHeaderComponent } from './trading/table-header/table-header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchBarComponent } from './common/search-bar/search-bar.component';
import { TradeModalComponent } from './trading/trade-modal/trade-modal.component';
import { ChartsModule } from 'ng2-charts';
import { StockChartComponent } from './trading/stock-chart/stock-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    PortfolioComponent,
    TradeHistoryComponent,
    TradingComponent,
    NavbarComponent,
    NavbarLinkComponent,
    HeaderBarComponent,
    SearchPipe,
    FooterComponent,
    LandingPageComponent,
    TableHeaderComponent,
    SearchBarComponent,
    TradeModalComponent,
    StockChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    LoginModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSortModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
