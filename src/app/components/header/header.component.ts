import { Component } from '@angular/core';
import {faCartShopping,faBagShopping,faUser} from '@fortawesome/free-solid-svg-icons'
import { LocalStorageService } from 'ngx-webstorage';
import { AuthorizeService } from 'src/app/Services/authorize.service';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  totalItem:number=0;
  isLoggedIn : boolean;
   user = this.localst.retrieve('User');
  constructor(private cartService:CartServiceService,private auth:AuthorizeService,private localst:LocalStorageService){}
ngOnInit(){
  
this.cartService.getProducts().subscribe(res=>{
  this.totalItem=res.length;
    if (this.user) {
      this.isLoggedIn = true;
    } else {
     this.isLoggedIn = false;
    }
})
}

  Iproducts=faBagShopping;
  Icart=faCartShopping;
  Iuser=faUser



  logout(){
    this.auth.logout();
  }
}
