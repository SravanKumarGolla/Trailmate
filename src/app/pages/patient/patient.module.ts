import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
 
import { IonicModule } from '@ionic/angular';
import { PatientPage } from './patient.page';
 
 
const routes: Routes = [
  {
    path: '',
    redirectTo: '/patient/main',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PatientPage,
    children: [
      {
        path: 'main',
        loadChildren: '../patientmain/main.module#PatientMainPageModule'
      },
      {
        path: 'notifications',
        loadChildren: '../patientnotification/notification.module#PatientNotificationPageModule'
      },
      {
        path: 'surveys',
        loadChildren: '../patientsurvey/survey.module#PatientSurveyPageModule'
      }
    ]
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ PatientPage ]
})
export class PatientPageModule { }
