import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerDataService {

  constructor(private http: Http) { }

  /**
   * Fetches customers data from the JSON server.
   */
  fetchCustomersData() {
    const url = '/api/customersinfoserver/getdata/customersInfoSource';
    return this.http.get(url)
      .map(res => res.json());
  }

}
