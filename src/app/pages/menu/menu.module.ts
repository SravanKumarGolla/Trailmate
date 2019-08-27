import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
 
import { IonicModule } from '@ionic/angular';
 
import { MenuPage } from './menu.page';
import { DynamicFormComponent } from '../dynamicform/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../dynamicformquestion/dynamic-form-question.component';
import { PatientSurveyPageModule } from '../patientsurvey/survey.module';
import { DisplaySurveyPageModule } from '../displaysurvey/displaysurvey.module';
 
const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/main',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'main',
        loadChildren: '../main/main.module#MainPageModule'
      },
      {
        path: 'notifications',
        loadChildren: '../notification/notification.module#NotificationPageModule'
      },
      {
        path: 'surveys',
        loadChildren: '../survey/survey.module#SurveyPageModule'
      },
      {
        path: 'respondsurvey',
        loadChildren: '../patientsurvey/survey.module#PatientSurveyPageModule'
      },
      {
        path: 'viewnotifications',
        loadChildren: '../patientnotification/notification.module#PatientNotificationPageModule'
      },
      {
        path: 'displaysurvey',
        loadChildren: '../displaysurvey/displaysurvey.module#DisplaySurveyPageModule'
      }
    ]
 
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ MenuPage ]
})
export class MenuPageModule { }
