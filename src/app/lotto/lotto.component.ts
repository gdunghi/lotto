import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.scss']
})
export class LottoComponent implements OnInit {
  formGroup: FormGroup;
  result = ['12345678', '02'];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      period: ['', Validators.required],
      lottoNumber: [{value: '', disabled: false}, Validators.required],
    })
    ;
  }

  check() {
    if(this.formGroup.invalid){
        alert("error");
    }
    // if (this.period.invalid || this.lottoNumber.invalid) {
    //   alert('error');
    // }
  }


}
