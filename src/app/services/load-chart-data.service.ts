import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoadChartDataService {


  constructor(private http: HttpClient) { }

  public loadChartData(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get('https://pkgstore.datahub.io/core/employment-us/aat1_json/data/85eca71b68b1ac971ed18efea8f9348b/aat1_json.json', httpOptions);
    // const data = {
    //   days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //   values: [820, 932, 901, 934, 1290, 1330, 1320]
    // }
    // return of(data);
  }
}
