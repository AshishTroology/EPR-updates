import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url,apikey } from '../global';
@Injectable({
  providedIn: 'root'
})
export class DisposalserviceService {

  base_url:any=url+"epr/disposal/"

  constructor(private http:HttpClient) { }
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
  getalldisposal(){
    let api_url=this.base_url+'getalldisposal'
    const httpOptions={
      headers:new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    }
    return this.http.get(api_url,httpOptions)
  }
  updateForm(data: any,id:any) {
    let api_url = this.base_url+'updatedisposalbyid/'+id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
  getDisposalById(id: any) {
    let api_url = this.base_url + 'getdisposalbyid/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.get(api_url, httpOptions);
  }
}
