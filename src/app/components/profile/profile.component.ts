import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userdetails:any;
  constructor(private localSt: LocalStorageService) {}

  ngOnInit(){
    this.userdetails=this.localSt.retrieve('user');
  }
}
