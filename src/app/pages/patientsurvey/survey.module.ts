import { NgModule,Compiler  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PatientSurveyPage } from './survey.page';
import { QuestionService } from 'src/app/question.service';


import { QuestionControlService } from 'src/app/question-control.service';
import { DisplaySurveyPageModule } from '../displaysurvey/displaysurvey.module';

const routes: Routes = [
  {
    path: '',
    component: PatientSurveyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PatientSurveyPage],
providers: [QuestionService,QuestionControlService]
})
export class PatientSurveyPageModule {
  constructor(private _runtimeCompiler: Compiler){
    // this._runtimeCompiler.clearCache();
  }
}
