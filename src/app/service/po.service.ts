import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url,apikey } from '../global';
@Injectable({
  providedIn: 'root',
})
export class PoService {
  base_url: any = url+'epr/po/';
  constructor(private http: HttpClient) {}
  getallpo() {
    let api_url = this.base_url + 'getallpo';
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
  
  getpobyid(id: any) {
    let api_url = this.base_url + 'getpobyid/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.get(api_url, httpOptions);
  }
  updatepobyid(id:any,data: any) {
    let api_url = this.base_url + 'updatepobyid/'+id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

}
