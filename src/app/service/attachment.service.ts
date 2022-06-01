import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url,apikey } from '../global';
@Injectable({
  providedIn: 'root',
})
export class AttachmentService {
  constructor(private http: HttpClient) {}
  base_url = url+'epr/attachment';

  UploadFile(files: any,id:any) {
    let api_url = 'https://epr.troology.com/dt/upload';
    const formData = new FormData();
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept-Encoding': 'multipart/form-data',
        apikey: apikey,
      }),
    };
    formData.append('image', files[0], files[0].name);
    formData.append("attachmentid",id);
    return this.http.post(api_url, formData, httpOptions);
  }

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
}
