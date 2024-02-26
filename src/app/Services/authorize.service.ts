import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import {ToastrService} from 'ngx-toastr'
import{LocalStorageService }from 'ngx-webstorage'
import{Router} from '@angular/router'
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
  private productSubject = new Subject <any>(); 

  constructor(private http:HttpClient,private toastr: ToastrService,private localSt:LocalStorageService,private route :Router) { }

  signup(formGroup:FormGroup){
        const newUser = this.http.post<any>('http://localhost:3000/user',formGroup.value)
        return newUser;
  }

login(){
  const user = this.http.get<any[]>('http://localhost:3000/user')
  // .subscribe(result=>{
  //   const user = result.find((a:any)=>{
  //     return a.email === formGroup.value.email && a.password === formGroup.value.password
  //   });
  //   if(user){
  //     this.localSt.store('user',user);
  //     this.route.navigate(['products'])
  //     this.toastr.success('sucessfully LogedIn' ,'', {closeButton:true,progressBar:true,tapToDismiss:true,timeOut:1500});
  //   }else{
  //     this.toastr.error('Invalid Credentials' ,'', {closeButton:true,progressBar:true,tapToDismiss:true,timeOut:1500});
  //   }
  // })
  return user;
 }
  
logout(){
  this.localSt.clear('user');
  this.route.navigate(['login'])
}
  


sendproducts(id){
  const url2: string = 'http://localhost:3000/products/';
    this.http.get(url2+id).subscribe((response) => {
      this.productSubject.next(response);
    })

}

getproduct():Observable<any>{
  return this.productSubject.asObservable();
}


}


