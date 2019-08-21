import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
   user:any;
   role:string;
  pages = [
    {
      title: 'Home',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'Manage Patients',
      children: [
        {
          title: 'Manage Notifications',
          url: '/menu/notifications',
          icon: 'notifications'
        },
        {
          title: 'Manage Survey',
          url: '/menu/surveys',
          icon: 'megaphone'
        }
      ]
    }
  ];
 
  patientpages = [
    {
      title: 'Home',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'Manage Trial',
      children: [
       
        {
          title: 'Respond Survey',
          url: '/menu/respondsurvey',
          icon: 'megaphone'
        },
        {
          title: 'View Notifications',
          url: '/menu/viewnotifications',
          icon: 'notifications'
        }
      ]
    }
  ];
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