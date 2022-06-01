import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { url,apikey } from '../global';
@Injectable({
  providedIn: 'root',
})
export class UlbserviceService {
  base_url: any = url+'epr/ulb/';
  constructor(private http: HttpClient) {}
  getallulb() {
    let api_url = this.base_url + 'getallulb';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  saveulb(data: any) {
    let api_url = this.base_url;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  getulbbyid(id: any) {
    let api_url = this.base_url + 'getulbbyid/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateulb(id:any,data: any) {
    let api_url = this.base_url + 'updateulbbyid/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
}
