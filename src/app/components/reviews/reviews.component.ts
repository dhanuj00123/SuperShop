import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  comment:FormGroup;
  Iuser = faCircleUser;
  @Input() review:any;
  @Output() userreview = new EventEmitter<any>


  ngOnInit(){
    this.comment=new FormGroup({
      comtext: new FormControl(null ,[Validators.required])
    }
    )

    
  }
  get comtext(){
    return this.comment.get('comtext')
  }
  
  addcom(){
    
    this.userreview.emit(this.comtext.value)
    this.comtext.reset();
    
  }
}
