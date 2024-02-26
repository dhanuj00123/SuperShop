import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private localstorageservice:LocalStorageService,private route:Router) { }
  canActivate():boolean {
    if(this.localstorageservice.retrieve('user'))
    {
      
      return true;
    }
    else{
      this.route.navigate(['login'])
      return false;
    }
    
  }
}
