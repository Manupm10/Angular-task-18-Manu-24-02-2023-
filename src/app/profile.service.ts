import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public profileData=[ {
    fname:'Manu',
    lname:'Martin',
    password:'manu@123',
    age: '23',
    address:'xyz',
    email:'manu@gmail.com',
    phone:'7034657365',
    education:'MCA',
    country:'india',
    state:'kerala',
    message:'ckgkc',
    }
    ];

  constructor() { }

  getData(){
    return this.profileData;
  }

  addData(data:any){
    this.profileData.push(data);
  }
}
