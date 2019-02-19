import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LotteryService } from '../services/lottery.service';
import { Observable, Subscription } from 'rxjs';
import { Lotto } from './lotto';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.scss'],
})
export class LottoComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  sub: Subscription;
  found: Lotto = new Lotto();
  result = [];

  constructor(private formBuilder: FormBuilder, private lotteryService: LotteryService) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      period: ['', Validators.required],
      lottoNumber: [{ value: '', disabled: false }, Validators.required],
    })
      ;

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  check() {
    if (this.formGroup.invalid) {
      alert('error');
    } else {
      let lottoNo = this.formGroup.get("lottoNumber").value;
      let period = this.formGroup.get("period").value;

      this.sub = this.lotteryService.lottoResult(period, lottoNo).subscribe((r) => {
        this.result = r;
        this.found = r.find((rs) => {
          return rs.bigPrize === lottoNo || rs.lastThreeDigitPrize === lottoNo;
        });

      }, (err) => {
        alert(err);
      });
    }
  }


  checkLastThreeDigitPrize(lottoNo: string, lastThreeDigitPrize: string): boolean {
    if (lastThreeDigitPrize) {
      if (lottoNo.substr(3, 6) === lastThreeDigitPrize) {
        return true;
      }
    }

    return false
  }



}
