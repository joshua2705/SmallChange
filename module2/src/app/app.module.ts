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
import { LoginPageComponent } from './login/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { SearchPipe } from './pipes/search.pipe';
import { FooterComponent } from './common/footer/footer.component';

import { MatSortModule } from '@angular/material/sort';

import { TableHeaderComponent } from './trading/table-header/table-header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchBarComponent } from './common/search-bar/search-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { WalletComponent } from './wallet/wallet.component';
import{ MatDatepickerModule } from '@angular/material/datepicker';
import { authInterceptorProviders } from './helpers/http.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { TradeModalComponent } from './trading/trade-modal/trade-modal.component';
import { ChartsModule } from 'ng2-charts';
import { StockChartComponent } from './trading/stock-chart/stock-chart.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
const notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 12,
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10,
    },
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4,
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease',
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50,
    },
    shift: {
      speed: 300,
      easing: 'ease',
    },
    overlap: 150,
  },
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginPageComponent,
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
    WalletComponent,
    TradeModalComponent,
    StockChartComponent,

  ],
  entryComponents:[WalletComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSortModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatRadioModule,
    MatSliderModule,
    MatTabsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSnackBarModule,
    ChartsModule,
  NotifierModule.withConfig(notifierDefaultOptions),
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
