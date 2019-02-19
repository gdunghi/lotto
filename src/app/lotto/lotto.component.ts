import { Router } from '@angular/router';
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
export class LottoComponent implements OnInit {
  formGroup: FormGroup;
  found: Lotto = new Lotto();
  result = [];

  constructor(private formBuilder: FormBuilder, private lotteryService: LotteryService, private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      period: ['', Validators.required],
      lottoNumber: [{ value: '', disabled: false }, Validators.required],
    })
      ;

  }

  check() {
    this.found = null;
    if (this.formGroup.invalid) {
      alert('error');
    } else {
      let lottoNo = this.formGroup.get("lottoNumber").value;
      let period = this.formGroup.get("period").value;

      this.lotteryService.lottoResult(period, lottoNo).subscribe((r) => {
        this.result = r;
      }, (err) => {
        alert(err);
      });
    }
  }


  checkLastThreeDigitPrize(): boolean {
    if (this.formGroup.get("lottoNumber").value.substr(3, 6) === this.found.lastThreeDigitPrize) {
      return true;
    }
    return false;
  }

  checkBigPrize(): boolean {
    return this.formGroup.get("lottoNumber").value === this.found.bigPrize;
  }

  goToResultPage() {
    this.router.navigate(["/lotto-result/20190216", { "lotto_number": "216" }]);
  }

}
