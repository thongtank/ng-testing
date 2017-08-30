import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PageService {
  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  // headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) { }

  public getPages() {
    return this.http.get('http://localhost:3000/api/pages')
      .map((res: Response) => res.json());
    // return PAGES;
  }
  // {'Content-Type': 'application/x-www-form-urlencoded'}
  public createPage(_id: number, title: string, content: string) {
    // this.options.headers = this.headers;
    return this.http.post('http://localhost:3000/api/create', {_id: _id, title: title, content: content }
    , this.options).map((res: Response) => res.json());
  }
}
