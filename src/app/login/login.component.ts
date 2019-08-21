import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';

@Component({templateUrl: './login.component.html',
styleUrls: ['./login.component.css']})
export class UserLoginComponent implements OnInit {
   
    returnUrl: string;
     user:User;
     username:string;
     password:string;
    constructor(private route: ActivatedRoute,
        private router: Router,private authenticationService:AuthenticationService
    ) {

    }

    ngOnInit() {
    console.log('UserLoginComponent');
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.signIn();
    }

    reset() {
      
    this.username ='';
    this.password=''
  }
    signIn() {
        debugger;
      let user =  this.authenticationService.login(this.username, this.password);
        
      // if(user.username =="admin"){
      //   this.router.navigate([this.returnUrl]);
      // }
      // else if(user.username !="admin"){
      //   this.router.navigate([this.returnUrl]);
      // }
      if(user){
        this.router.navigate([this.returnUrl]);
      }
    }
}
