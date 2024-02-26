import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from '../components/profile/profile.component';
import { LazysharedModule } from '../lazyshared/lazyshared.module';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    LazysharedModule
  ]
})
export class ProfileModule { }
