import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../components/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(
    component: RegisterComponent  
  )
  {
    if(component.register.dirty){
      return window.confirm("You have some unsaved changes Are you sure you want to leave?")
    }
    return true;
  }
  
}
