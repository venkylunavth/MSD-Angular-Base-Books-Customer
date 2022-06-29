import { Component } from '@angular/core';
import { BooksService } from './service/books.service';
import { CustomerService } from './service/customer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  books:any;
  customer: any;
  constructor(private service:BooksService,private CustomerService: CustomerService){ }

  ngOnInit():void {
    this.loadData();
    this.loadcustomer();
  }
  //books
  loadData():void {
   this.service.getAll().subscribe((response: any) =>{
   this.books=response;
   console.log(this.books);
   })
  }
  //Customers
  loadcustomer():void {
    this.CustomerService.getAll().subscribe((response: any) =>{
    this.customer=response;
    console.log(this.customer);
    })
   }
  //temporary variable Books
  addId=0;
  addName="";
  addAuthor= "";

  //temporary variable customer
  addCId=0;
  addCName="";
  addCEmail= "";
  addCMobile= "";
//we are creating temp books
addBook(){
  var newBook={
    "id":this.addId,
    "name":this.addName,
    "author":this.addAuthor,};
this.service.addBook(newBook).subscribe((response:any) =>{
  var data=response;
  console.log(this.books); })

  
  //reintialise
  this.addId=0;
  this.addName="";
  this.addAuthor="";
}
//delete
deleteId=0;
deleteBook(){
  this.service.deleteBook(this.deleteId).subscribe(response=>{
    console.log(response);
  })
}

  //AddCustomers
  addCustomer(){
    var newCustomer={
      "id":this.addCId,
      "name":this.addCName,
      "email":this.addCEmail,
      "mobile":this.addCMobile};
      this.CustomerService.addCustomer(newCustomer).subscribe((response:any) =>{
        var data=response;
        console.log(this.customer); })
      
        //reintialise
  this.addCId=0;
  this.addCName="";
  this.addCEmail="";
  this.addCMobile="";
}
//delete
deleteCId=0;
deleteCustomer(){
  this.CustomerService.deleteCustomer(this.deleteCId).subscribe(response=>{
    console.log(response);
  })
}
      

}
