import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class PatientNotificationPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('PatientNotificationPage')
  }

}
