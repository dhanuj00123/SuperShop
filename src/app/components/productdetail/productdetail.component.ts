import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ActivatedRoute, Params, Router, TitleStrategy } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { faArrowLeft, faCircleUser ,faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthorizeService } from 'src/app/Services/authorize.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent implements OnInit , OnDestroy{
  Iback = faArrowLeft;
  Iuser = faCircleUser;
  products: any;
  Idown = faChevronDown;

  // id = this.route.snapshot.params['id'];
  id;
  tableName;
  fakecomment:any;
  private prodsub :Subscription;
  constructor(private route: ActivatedRoute,private router: Router,private toastr: ToastrService, private http: HttpClient,private cartService :CartServiceService,private service : AuthorizeService) {
    // console.log(this.products);
  }
  ngOnInit()   {
    window.scroll(0,0);
    this.route.params.subscribe( params => 
      {
         this.id = params["id"];
        //  console.log(this.id)
      });
     this.router.events.subscribe( (data) => {
        this.tableName = this.route.snapshot.params.id;
      })

    const url: string = `http://localhost:3000/products/${this.id}`;
    this.http.get(url).subscribe((response) => {
      this.products = response;
      Array.from(this.products).forEach((a:any) => {
        Object.assign(a,{quantity:1});        
      });
    });

    this.prodsub= this.service.getproduct().subscribe(prod=>{
      this.products=prod
      
    })
    
  }
  
  addtocart(item:any){
    this.cartService.addtoCart(item);
    this.toastr.success('Item '+ item.title+' Added to cart','', {closeButton:true,progressBar:true,tapToDismiss:true,timeOut:1500});
  }
  customOptions: OwlOptions = {
    loop: true,
    items: 3,
    margin: 10,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    autoplaySpeed: 1500,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,

    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };

  navigate(id){
    this.router.navigate(['/productdetail/'+id]);
  }

  ngOnDestroy()  {
    this.prodsub.unsubscribe();
  }
  
  addcom($event){
    this.fakecomment=$event
    console.log($event);
  }
}
