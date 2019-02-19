import { LotteryService } from './../../services/lottery.service';
import { Lotto } from './../../lotto/lotto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  lottos: Lotto[];
  constructor(private service: LotteryService) { }

  ngOnInit() {
    this.service.getAll().subscribe((result) => {
      this.lottos = result;
    })
  }

}
