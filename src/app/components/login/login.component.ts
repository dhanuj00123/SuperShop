import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{faGoogle,faGithub,faFacebook} from '@fortawesome/free-brands-svg-icons';
import{faEye,faEyeSlash,}from'@fortawesome/free-regular-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthorizeService } from 'src/app/Services/authorize.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  login: FormGroup;
  Igoogle=faGoogle;
  Igithub=faGithub;
  
  Ifacebook=faFacebook;
  Ieye=faEye;
  Ieyeslash=faEyeSlash;
  err :boolean ;
  constructor( private router: Router,
    private auth: AuthorizeService,
    private localSt: LocalStorageService,
    private toastr:ToastrService)
  {

  }
  ngOnInit() {
   
    this.login = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null,[ Validators.required,Validators.minLength(6)]),
    });
  }
  get form(){
    return this.login.controls
  }
  get email() {
    return this.login.get('email');
  }
  get password() {
    return this.login.get('password');
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  submitform(){
    if (this.login.valid) {
      this.auth.login().subscribe(res=>{
         const user = res.find((a:any)=>{
              return a.email === this.login.value.email && a.password === this.login.value.password
            });
            // console.log(user);
      if(user){
            this.localSt.store('user',user);
            this.err=false;
            this.router.navigate(['products'])
            this.toastr.success('sucessfully LogedIn' ,'', {closeButton:true,progressBar:true,tapToDismiss:true,timeOut:1500});
          }else{
            this.err=true;
            this.toastr.error('Invalid Credentials' ,'', {closeButton:true,progressBar:true,tapToDismiss:true,timeOut:1500});
          }
        })
      // console.log(this.login.value.email);
    
    } else {
      this.validateAllFormFields(this.login);
    }
  }
  
}
