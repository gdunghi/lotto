import { LotteryService } from './../../services/lottery.service';
import { Lotto } from './../../lotto/lotto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  lottos: Lotto[];
  period: "";
  lottoNumber: "";
  constructor(private service: LotteryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.service.getAll().subscribe((result) => {
      this.lottos = result;
    })
    this.activatedRoute.params.subscribe((param) => {
      this.period = param["period"];
      this.lottoNumber = param["lotto_number"];
    });
  }

}
