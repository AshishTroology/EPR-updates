import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url,apikey } from '../global';
@Injectable({
  providedIn: 'root',
})
export class DisposalExecutionService {
  base_url: any = url+'epr/disposalexecution/';

  constructor(private http: HttpClient) {}
  submitForm(data: any) {
    let api_url = this.base_url;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
  getalldisposalexecution() {
    let api_url = this.base_url + 'getalldisposalexecution';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };

    return this.http.get(api_url, httpOptions);
  }

  updateForm(data: any, id: any) {
    let api_url = this.base_url + 'update_disposalexecution/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
  getdisposalexecutionbyid(id: any) {
    let api_url = this.base_url + 'getdisposalexecutionbyid/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.get(api_url, httpOptions);
  }
}





