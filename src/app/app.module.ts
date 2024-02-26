import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{HttpClientModule}from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxTruncateTextModule } from 'ngx-truncate-text';
import { NgxStarsModule } from 'ngx-stars';
import { FilterpipePipe } from './shared/filterpipe.pipe';
import { FormsModule } from '@angular/forms';
import { SortpipePipe } from './shared/sortpipe.pipe';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CartComponent } from './components/cart/cart.component';
import {NgxWebstorageModule} from 'ngx-webstorage';

import { ToastrModule } from 'ngx-toastr';
import { AuthGuardGuard } from './Services/auth-guard.guard';
import { EmptypageComponent } from './components/emptypage/emptypage.component';
import { RelatedproductsComponent } from './components/relatedproducts/relatedproducts.component';
import { ZoomimgDirective } from './directives/zoomimg.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LazysharedModule } from './lazyshared/lazyshared.module';
import {StoreModule} from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    // HeaderComponent,
    // FooterComponent,
    ProductsComponent,
    FilterpipePipe,
    SortpipePipe,
    ProductdetailComponent,
    CartComponent,
    EmptypageComponent,
    RelatedproductsComponent,
    ZoomimgDirective,
    TooltipDirective,
    ReviewsComponent,

    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxTruncateTextModule,
    NgxStarsModule,
    FormsModule,
    CarouselModule,
    ToastrModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    LazysharedModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
