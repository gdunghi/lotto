import { HttpClient } from '@angular/common/http';
import { Lotto } from './../lotto/lotto';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class LotteryService {
  subResult = ['1', '2'];
  constructor(private http: HttpClient) {
  }

  lottoResult(period: string, lottoNo: string): Observable<Lotto[]> {
    return this.http.get<Lotto[]>(`http://www.mocky.io/v2/5c6bc21c320000fb1cbef5e1`);
  }
}
