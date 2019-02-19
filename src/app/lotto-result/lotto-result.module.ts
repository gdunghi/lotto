import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LottoResultRoutingModule } from './lotto-result-routing.module';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    LottoResultRoutingModule
  ]
})
export class LottoResultModule { }
