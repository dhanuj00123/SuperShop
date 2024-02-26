import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import{ faTrash,faTrashCan,faCartPlus} from'@fortawesome/free-solid-svg-icons';
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements AfterViewInit{
  Idelete=faTrash;
  Ideleteall=faTrashCan;
  Imore=faCartPlus
  product : any=[];
  grandtotal !:number;
  
  @ViewChildren('view') viewch:QueryList<ElementRef>;
  constructor(private cartService:CartServiceService){}
  ngAfterViewInit(): void {
    console.log(this.viewch)
  }
  
  ngOnInit(){
    this.cartService.getProducts().subscribe(res=>{
      this.product=res;
      this.grandtotal=this.cartService.getTotalPrice()
     
    })
  }
  removeitem(item){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart() ;
  }
  imagehover(){
    this.viewch.forEach((item)=>{
      item.nativeElement.attributes[2].value='zoom'
   
    })
    
  //   console.log(this.viewch.nativeElement.attributes[2].value='zoom')
  //  this.viewch.nativeElement.class='zoom'
  }
  

}
