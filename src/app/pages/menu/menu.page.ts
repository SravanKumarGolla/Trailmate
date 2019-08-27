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
      title: 'Manage Trial',
      children: [
        {
          title: 'Manage Notifications',
          url: '/menu/notifications',
          icon: 'notifications'
        },
        {
          title: 'Manage Patients',
          url: '/menu/surveys',
          icon: 'people'
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
       
        // {
        //   title: 'Respond Survey',
        //   url: '/menu/respondsurvey',
        //   icon: 'megaphone'
        // },
        {
          title: 'Manage Visits',
          url: '/menu/viewnotifications',
          icon: 'notifications'
        },
        {
          title: 'Respond Survey',
          url: '/menu/displaysurvey',
          icon: 'megaphone'
        },
        {
          title: 'Manage Alerts',
          url: '/menu/patientnotications',
          icon: 'alert'
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