import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  public cartItemList:any=[]
  public productList = new BehaviorSubject<any>([]);
  constructor() { 
    
  }
  getProducts(){
    return this.productList.asObservable();
  }
  // setProduct(product:any){
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    
  }
  getTotalPrice():number{
    let gtotal = 0;
    this.cartItemList.map((a:any)=>{
      gtotal += a.discountedprice;
      
    })
    return gtotal;
  }
  removeCartItem(product:any){
    var addNew=true;
    console.log(product);
    this.cartItemList.map((a:any , index:any)=>{
      console.log(this.cartItemList)
      
      if(product.id=== a.id && addNew){
        // console.log(index)
        this.cartItemList.splice(index,1);
        addNew=false;
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
    
  }

}
