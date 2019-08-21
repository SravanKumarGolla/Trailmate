import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-menu',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {
 
  pages = [
    {
      title: 'Home',
      url: '/patient/main',
      icon: 'home'
    },
    {
      title: 'Patients',
      children: [
        {
          title: 'Notifications',
          url: '/patient/notifications',
          icon: 'logo-ionic'
        },
        {
          title: 'Survey',
          url: '/patient/surveys',
          icon: 'logo-google'
        },
      ]
    }
  ];
 
  constructor() { }
 
  ngOnInit() {
    console.log('PatientPage')
  }
 
}