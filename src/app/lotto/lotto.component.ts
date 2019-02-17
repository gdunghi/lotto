import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.scss']
})
export class LottoComponent implements OnInit {
  period = new FormControl('', Validators.required);
  lottoNumber = new FormControl({value: '', disabled: false}, [Validators.required]);
  result = ['12345678', '02'];

  constructor() {
  }

  ngOnInit() {
  }

  check() {
    if (this.period.invalid || this.lottoNumber.invalid) {
      alert('error');
    }
  }


}
