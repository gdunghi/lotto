import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LotteryService} from '../services/lottery.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.scss'],
})
export class LottoComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  sub: Subscription;
  result = [];

  constructor(private formBuilder: FormBuilder, private lotteryService: LotteryService) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      period: ['', Validators.required],
      lottoNumber: [{value: '', disabled: false}, Validators.required],
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
      this.sub = this.lotteryService.lottoResult().subscribe((r) => {
        this.result = r;
      }, (err) => {
        alert(err);
      });
    }
  }


}
