import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  getAll()
  {
    return this.http.get<any>("http://localhost:9090/getbooks");
  }
  addBook(user:any){
    return this.http.get("http://localhost:9090/addbooks?id="+user.id + "&name=" +user.name+"&author="+ user.author);
  }
  deleteBook(id:any){
    return this.http.get("http://localhost:8090/?id="+ id);
  }

}

