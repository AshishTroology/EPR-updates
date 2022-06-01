import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url,apikey } from '../global';
@Injectable({
  providedIn: 'root',
})
export class TranporterserviceService {
  base_url: any = url+'epr/transporter/';
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

  getalltransporter() {
    let api_url = this.base_url + 'getalltransporter';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  getTransporterById(id: any) {
    let api_url = this.base_url + 'gettransporterbyid/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateForm(data: any,id:any) {
    let api_url = this.base_url+'updatetransporterbyid/'+id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
}
