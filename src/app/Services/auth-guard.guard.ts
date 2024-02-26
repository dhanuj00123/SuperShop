import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
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
