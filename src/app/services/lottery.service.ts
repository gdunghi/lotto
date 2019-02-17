import {Observable} from 'rxjs';

export class LotteryService {
  subResult = ['1', '2'];
  constructor() {
  }

  lottoResult(): Observable<string[]> {
    return new Observable((ob) => {
      ob.next(this.subResult);
      ob.complete();
    });
  }
}
