import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthorizeService } from 'src/app/Services/authorize.service';

@Component({
  selector: 'app-relatedproducts',
  templateUrl: './relatedproducts.component.html',
  styleUrls: ['./relatedproducts.component.css']
})
export class RelatedproductsComponent  implements OnInit{
  allproducts;
  cat = this.route.snapshot.params['category']
 
  constructor(private http: HttpClient,private route: ActivatedRoute,private service:AuthorizeService) {
   
    
  }
  ngOnInit(): void {
    const url2: string = 'http://localhost:3000/products';
    this.http.get(url2).subscribe((response) => {
      this.allproducts = response;
      console.log(this.allproducts)
    });
  }
  

  redirect(id){
    this.service.sendproducts(id)
    window.scroll(0,0);
  }
    
  }


