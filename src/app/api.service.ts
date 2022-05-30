import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{ HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/'
  dbUserName='apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx'
  dbPassword = '85e4a7e36372ac1e47c80f4b81a78d62'
   basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };

    add(db: string, doc: object): Observable<{}> {
      const url = this.url + db;
      return this.http.post(url, doc, this.httpOptions);
    }
storedata(formvalue:any)
{
console.log(formvalue);
  // return this.http.post<any>('http://localhost:8000/mail/',formvalue);
  return this.http.post<any>('http://localhost:8000/postdata/',formvalue);
     }
get(db:string): Observable<{}> {
      const url = this.url + db + '/_all_docs?include_docs=true';
      return this.http.get(url, this.httpOptions);
    }
getDocsByID(db:string, id:string): Observable<{}>{
      const url = this.url + db + '/'+id;
      return this.http.get(url, this.httpOptions);
    }
deleteData(id: any, rev: any): Observable<{}> {
      const urld = this.url + 'freshers_sample/' + id + '/?rev=' + rev;
      return this.http.delete(urld, this.httpOptions);
    }
// getByType(type:string, fields:any){
//   let url =this.url + 'freshers_sample/_find'
//   let typeData = {
//     selector : {
//       type: type
//     },
//     fields: fields
//   };
//   return this.http.post(url, typeData, this.httpOptions)

// }
postByTypedUser(type:string, fields:any,id:any){
  let url =this.url + 'freshers_sample/_find'
  let typeData = {
    selector : {
      type: type,
      user: id
    },
    fields: ['email']
  };
  return this.http.post(url, typeData, this.httpOptions)
}
checkuserlogin(email:any,password:any)
 {
  // return this.http.get<any>('http://localhost:8000/getdata/:id'+email);
  return this.http.get<any>('http://localhost:8000/getdata/'+email);
 }
  }
