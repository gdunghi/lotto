import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LottoComponent } from './lotto/lotto.component';

const routes: Routes = [
  { path: '', component: LottoComponent },
  { path: 'lotto-result', loadChildren: './lotto-result/lotto-result.module#LottoResultModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
