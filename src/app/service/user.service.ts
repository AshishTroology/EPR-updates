import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url,apikey } from '../global';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  base_url = url+'epr';

  createUser(data: any) {
    let api_url = this.base_url + '/user';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
  getalluser(){
    let api_url=this.base_url+'/user/getalluser'
    const httpOptions={
      headers:new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    }
    return this.http.get(api_url,httpOptions)
  }

  createRole(data: any) {
    console.log(data);
    let api_url = this.base_url + '/role';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  
  getallrole(){
    let api_url=this.base_url+'/role/getallrole'
    const httpOptions={
      headers:new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    }
    return this.http.get(api_url,httpOptions)
  }
  
  getrolebyid(id: any) {
    let api_url = this.base_url + '/role/getrolebyid/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updaterolebyid(id:any,data: any) {
    let api_url = this.base_url + '/role/updaterolebyid/'+id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  changePassword(data: any,id:any) {
    console.log(data);
    let api_url = this.base_url + '/user/change-password/'+id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
  getuserbyid(id: any) {
    let api_url = this.base_url + '/user/getuserbyid/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateForm(id:any,data: any) {
    let api_url = this.base_url + '/user/updateuserbyid/'+id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        apikey: apikey,
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

//   passupdat(id:any,data: any) {
//     let api_url = this.base_url + '/user/passupdat/'+id;
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'content-type': 'application/json;charset=UTF-8',
//         apikey: apikey,
//       }),
//     };
//     return this.http.post(api_url, data, httpOptions);
//   }
// }
passupdat(data: any,id:any) {
  console.log(data);
  let api_url = this.base_url + '/user/passupdat/'+id;
  const httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json;charset=UTF-8',
      apikey: apikey,
    }),
  };
  return this.http.post(api_url, data, httpOptions);
}
}