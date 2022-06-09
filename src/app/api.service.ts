import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

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
// to add data to database
    add(db: string, doc: object): Observable<{}> {
      const url = this.url + db;
      return this.http.post(url, doc, this.httpOptions);
    }
//Storing data through node
storedata(formvalue:any)
{
console.log(formvalue);
  return this.http.post<any>('http://localhost:8000/postdata/',formvalue);
     }

//Get all data from database
get(db:string): Observable<{}> {
      const url = this.url + db + '/_all_docs?include_docs=true';
      return this.http.get(url, this.httpOptions);
    }
    getById(db:string, id:number): Observable<{}> {
      const url = this.url + db + id;
      return this.http.get(url, this.httpOptions);
    }
  // get all data by using type  
 gettingByType(db:string, type:string): Observable<{}>{
  const url = this.url + db + '/'+type;
  return this.http.get(url, this.httpOptions);

 }   
 // Getting docs by ID
getDocsByID(db:string, id:string): Observable<{}>{
      const url = this.url + db + '/'+id;
      return this.http.get(url, this.httpOptions);
    }
    // To delete data in db
deleteData(id: any, rev: any): Observable<{}> {
      const urld = this.url + 'freshers_sample/' + id + '/?rev=' + rev;
      return this.http.delete(urld, this.httpOptions);
    }
    //get docs by type
getByType(type:string, id:any){
  let url =this.url + 'freshers_sample/_find'
  let typeData = {
    selector : {
      type: type,
      user:id,
    },
  };
  return this.http.post(url, typeData, this.httpOptions)
}
getByTypes(type:string){
  let url =this.url + 'freshers_sample/_find'
  let typeData = {
    selector : {
      type: type,
      // user:id,
    },
  };
  return this.http.post(url, typeData, this.httpOptions)
}

findByID(id:any){
  let url= this.url + 'freshers_sample/_find'
  let type={
    selector:{
      "_id":id,
      "user":id,
      "type":"order"
    }
  };
  return this.http.post(url, type,this.httpOptions)
}

getType(data:any){
  const url="https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudant.com/freshers_sample/_design/filtertype/_view/filtertype"
  const keys = [data]
  return this.http.post(url, keys, this.httpOptions)
}

//login function using node
checkuserlogin(id:any)
 {
  return this.http.post<any>('http://localhost:8000/getdata/',id);
 }
}
