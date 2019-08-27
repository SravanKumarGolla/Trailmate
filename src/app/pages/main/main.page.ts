import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  user:any;
  role:string;
 
constructor(private router: Router) {} 

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
   logOut(){ 
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login'],{replaceUrl: true }); 
}
}
