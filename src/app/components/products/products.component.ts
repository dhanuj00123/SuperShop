import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  faChevronRight,
  faChevronLeft,
  faFilter,
  faArrowUpShortWide,
  faArrowDownWideShort
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit  {
  products: any;
  categorie = '';
  gender = '';
  sort :any[];
  sortdir ='aesc';

  p: number = 1;
  Iright = faChevronRight;
  Ileft = faChevronLeft;
  Ifilter = faFilter;
  Iascending=faArrowUpShortWide;
  Idescinding=faArrowDownWideShort;

  public constructor(private http: HttpClient) {
    
  }
  
  
  
  
  ngOnInit(): void {
    const url: string = ' http://localhost:3000/products';
    this.http.get(url).subscribe((response) => {
      this.products = response;
    });
    
  }
  sortdirection(){
    console.log(this.sortdir);
    if(this.sortdir === 'desc'){
      this.sortdir='aesc';
    }else{
      this.sortdir='desc';
    }

  }
  
}
