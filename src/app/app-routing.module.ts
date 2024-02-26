import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { EmptypageComponent } from './components/emptypage/emptypage.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { RelatedproductsComponent } from './components/relatedproducts/relatedproducts.component';
import { AuthGuardGuard as Guard} from './Services/auth-guard.guard';
import { UnsavedChangesGuard as unsave} from './Services/unsaved-changes.guard';


const routes: Routes = [
  {path:'',component:HomeComponent},
  
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent,canDeactivate:[unsave]},
  {path:'products',component:ProductsComponent },
  {path:'productdetail/:id',component:ProductdetailComponent,children:[
    {path:'relatedproducts/:category',component:RelatedproductsComponent}
  ]},
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path:'cart',component:CartComponent,canActivate:[Guard]},
  {path:'**',component:EmptypageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'disabled', 
    
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
