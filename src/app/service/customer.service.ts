import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<any>("http://localhost:9090/getcustomer");
  }
  addCustomer(user:any){
    return this.http.get("http://localhost:9090/addcustomer?id="+user.id + "&name=" +user.name+"&email="+ user.email+"&mobile="+user.mobile);
  }
  deleteCustomer(id:any){
    return this.http.get("http://localhost:8091/?id="+ id);
  }
}
