import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url,apikey } from '../global';
@Injectable({
  providedIn: 'root',
})
export class CollectioncenterserviceService {
  base_url: any = url+'epr/collectioncenter'
  constructor(private http: HttpClient) {}
  getallcollection() {
    let api_url = this.base_url + '/getallcollectioncenter';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  saveccl(data: any) {
    let api_url = this.base_url;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  getcclbyid(id: any) {
    let api_url = this.base_url + '/getcollectioncenterbyid/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateccl(id: any, data: any) {
    let api_url = this.base_url + '/updatetallcollectionbyid/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
}
