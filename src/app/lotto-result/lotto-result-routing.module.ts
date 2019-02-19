import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  // { path: '', component: ResultComponent },
  { path: ':period', component: ResultComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LottoResultRoutingModule { }
