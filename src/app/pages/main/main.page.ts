import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  user:any;
  role:string;
  constructor() { }

  ngOnInit() {
   
    console.log('ngOnInit')
    this.user= JSON.parse(localStorage.getItem('currentUser'));
    if(this.user.username == "admin"){
     this.role ="admin";
    }
    else{
     this.role ="patient";
    }
    console.log('user : ', JSON.parse(localStorage.getItem('currentUser')));
   }
}
