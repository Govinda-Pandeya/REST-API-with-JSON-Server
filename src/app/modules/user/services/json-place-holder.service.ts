import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonPlaceHolderService {

  constructor(public http: Http) { }


  /**
   * Fetches posts data from provided JsonPlaceHolder API
   * @returns {Observeable}
   */
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }

}
