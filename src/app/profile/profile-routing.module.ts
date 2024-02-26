import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile.component';
import { AuthGuardGuard } from '../Services/auth-guard.guard';

const routes: Routes = [
  {path:'',component:ProfileComponent,canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
