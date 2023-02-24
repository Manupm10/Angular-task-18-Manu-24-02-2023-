import { ProfileService } from './../profile.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:ProfileService){

  }
  ngOnInit() {

    this.profileData=this.service.getData();
    
  }
  public profileData=[ {
    fname:'',
    lname:'',
    password:'',
    age: '',
    address:'',
    email:'',
    phone:'',
    education:'',
    country:'',
    state:'',
    message:'',
    }
    ];


}
