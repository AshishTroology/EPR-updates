import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { url,apikey } from '../global';
@Injectable({
  providedIn: 'root'
})
export class ChangepassService {

  constructor(private http: HttpClient) {}
  base_url = url+'epr/user';

  getuserbyid(id: any) {
    let api_url = this.base_url + 'getuserbyid/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

 changepass(id:any,data: any) {
    let api_url = this.base_url + 'updatepass/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
}
