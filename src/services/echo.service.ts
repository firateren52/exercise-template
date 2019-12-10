import { Observable } from "rxjs";
import { of } from "rxjs";

export class EchoService {
  constructor() {}
  private getJsonData(query): any {
    return {
      q: query.q
    };
  }

  public jsonifyQueryParams(query): Observable<any> {
    return of(this.getJsonData(query));
  }
}
