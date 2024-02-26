import { Component ,OnInit} from '@angular/core';
import { AbstractControl, FormArray, FormControl,FormGroup,Validators } from '@angular/forms';
import{faPlus,faXmark,faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { AuthorizeService } from 'src/app/Services/authorize.service';
import{Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
register:FormGroup;
submitted:boolean = false;
pass:string = "password"
show:boolean=false;
isText:boolean=false;


Iadd = faPlus;
Iremove = faXmark;
Ieye=faEye;
Ieyeslash=faEyeSlash
occupations:any=['Student','Employed','Unemployed','Freelancer','other']

constructor(private auth:AuthorizeService,private route :Router,private toastr:ToastrService){
 
}
ngOnInit(){
  this.register=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.maxLength(12)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required, Validators.minLength(6)]),
    confirmpassword:new FormControl(null,[Validators.required]),
    gender:new FormControl(null,Validators.required),
    date:new FormControl(null,Validators.required),
    description:new FormControl(null,[Validators.required,Validators.maxLength(80)]),
    occupation:new FormControl(null,Validators.required),
    education12:new FormControl(null,Validators.required),
    educationdegree:new FormControl(null,Validators.required),
    // image:new FormControl(null,Validators.required),
    tandc:new FormControl(null,Validators.requiredTrue),
    intrests:new FormArray([ ]),
    
    
  },
  {validators:this.mustMatch('password','confirmpassword')})
  
}


public showPass(){
  if (this.pass === 'password') {
    this.pass = 'text';
    this.show = true;
  } else {
    this.pass = 'password';
    this.show = false;
  }
  
}

get form(){
  return this.register.controls
}

get name(){
  return this.register.get('name')
}

get tandc(){
  return this.register.get('tandc')
}
get email(){
  return this.register.get('email')
}
get password(){
  return this.register.get('password')
}
get occupation(){
  return this.register.get('occupation')
}

get confirmpassword(){
  return this.register.get('confirmpassword')
}

get gender(){
  return this.register.get('gender')
}

get description(){
  return this.register.get('description')
} 
get date(){
  return this.register.get('date')
}
get education(){
 return this.register.get('education')
}
get  educationdegree(){
  return this.register.get('educationdegree')
}
get education12(){
return this.register.get('education12')
}


// get image(){
//   return this.image.get('image')
// }

get intrestcontrols(){
  return (<FormArray>this.register.get('intrests')).controls;
}

// get educationcontrols(){
//   return (<FormArray>this.register.get('education')).controls;
// }


addintrest(){
  const control=new FormControl(null,Validators.required);
 (<FormArray>this.register.get('intrests')).push (control);
}

removeintrest(index:number){
  (<FormArray>this.register.get('intrests')).removeAt(index);
}


// addEducation(){
//   const control= new FormGroup({
//     colName:new FormControl(null,Validators.required),
//     degreeName: new FormControl(null,Validators.required),
//     grade:new FormControl(null,Validators.required)
//   });
//   (<FormArray>this.register.get('education')).push(control)
// }

mustMatch(controlName:string,matchingControlName:string){
  return(formGroup:FormGroup)=>{
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors['mustMatch']){
      return null;
    }
    let errors = null;
    if(control.value !== matchingControl.value){
      errors = { mustMatch: true };
    }
    matchingControl.setErrors(errors);
      return errors;
  }
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
submitform() {
  
    if (this.register.valid) {
      this.auth.signup(this.register).subscribe(res=>
        {
          this.toastr.success('Account Created Sucessfully' ,'UserName: '+res.name, {closeButton:true,progressBar:true,tapToDismiss:true,timeOut:1500});
          this.route.navigate(['login'])
        });
      // console.log(this.register.value);
      this.reset()
    
    } else {
      this.validateAllFormFields(this.register);
    }
  // console.log(this.register.value);
  // this.register.reset();
}
reset(){
  this.register.reset();
}

}
function Confirmpass(control:AbstractControl): {[key:string]:any} | null {
 const password :string=control.value;
 const confirmpassword:string=control.value;
 if(password == confirmpassword){
  return null;
 } else{
  return{'missmatch' : true};
 }

}
