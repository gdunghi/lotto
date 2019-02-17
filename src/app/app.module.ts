import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LottoComponent} from './lotto/lotto.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LotteryService} from './services/lottery.service';

@NgModule({
  declarations: [
    AppComponent,
    LottoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LotteryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
