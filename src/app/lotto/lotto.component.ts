import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LotteryService} from '../services/lottery.service';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.scss'],
})
export class LottoComponent implements OnInit {
  formGroup: FormGroup;
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

  check() {
    if (this.formGroup.invalid) {
      alert('error');
    } else {
      this.result = this.lotteryService.lottoResult();
    }

    // if (this.period.invalid || this.lottoNumber.invalid) {
    //   alert('error');
    // }
  }


}
