import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import {adminReducer}from './state/admin.reducer'
const  adminRoutes:Routes = [{path:"" , component:AdminComponent}]
@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(adminRoutes),
    StoreModule.forFeature("users",adminReducer)
  ]
})
export class AdminModule { }
