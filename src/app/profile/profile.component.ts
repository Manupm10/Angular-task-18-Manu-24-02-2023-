import { ProfileService } from './../profile.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  myForm!: FormGroup;
  pwd='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';
  phoneno="[0-9 ]{10}";

  public profileData= {
    fname:'',
    lname:'',
    password:'',
    age: '',
    address:'',
    email:'',
    phone:'',
    education:'',
    country:'--Choose Country--',
    state:'',
    message:'',
    }
  constructor(private fb:FormBuilder,private service:ProfileService){

  }
  Countries: any = [
		{ name: 'Germany', states: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn' ] },
		{ name: 'Spain', states:   ['Barcelona','Malaga','Valencia','Madrid','Seville' ] },
		{ name: 'USA', states:  ['Downers Grove','Texas','New York','Florida'] },
		{ name: 'Mexico', states:   ['Puebla','Morelos','Chiapas','Durango'] },
		{ name: 'India', states: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore' ] },
    { name: 'China', states: ['Henan', 'Shandong', 'Fujian', 'Beijing' ] },
	];
	states: any = []; 

	changeCountry(country: any) { 
		this.states = this.Countries.find((cntry: any) => cntry.name == country.target.value).states; 
	}

  onClick(myForm:FormGroup){
    this.profileData.fname=myForm.value.fname;
    this.profileData.lname=myForm.value.lname;
    this.profileData.age=myForm.value.age;
    this.profileData.address=myForm.value.address;
    this.profileData.email=myForm.value.email;
    this.profileData.phone=myForm.value.phone;
    this.profileData.education=myForm.value.education;
    this.profileData.country=myForm.value.country;
    this.profileData.state=myForm.value.state;
    this.profileData.message=myForm.value.message;
    this.service.addData(this.profileData);
    console.log(this.service.profileData);
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      fname: ['', Validators.required],
      lname:  ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(this.pwd)]],
      conpassword: ['', [Validators.required, Validators.pattern(this.pwd)]],
      age: ['', Validators.required],
      phone :   ['', [Validators.required, Validators.pattern(this.phoneno)]],
      education: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(15)]],
    },
    {
      validators:this.Mustmatch('password','conpassword')
    });
  }

  Mustmatch(password:any,conpassword:any){
    
    return (formGroup:FormGroup)=>{
      const passwordcontrol=formGroup.controls[password];
      const conpasswordcontrol=formGroup.controls[conpassword];

      if(conpasswordcontrol.errors && !conpasswordcontrol.errors['Mustmatch']){
        return;
      }
      if(passwordcontrol.value!==conpasswordcontrol.value){
        conpasswordcontrol.setErrors({Mustmatch:true});
      }else{
        conpasswordcontrol.setErrors(null);
      }
    };

  }

}
