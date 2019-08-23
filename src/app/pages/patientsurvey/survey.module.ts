import { NgModule,Compiler  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PatientSurveyPage } from './survey.page';
import { QuestionService } from 'src/app/question.service';
import { DynamicFormComponent } from '../dynamicform/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../dynamicformquestion/dynamic-form-question.component';

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
  declarations: [PatientSurveyPage,DynamicFormComponent,DynamicFormQuestionComponent],
  providers:  [QuestionService]
})
export class PatientSurveyPageModule {
  constructor(private _runtimeCompiler: Compiler){
    // this._runtimeCompiler.clearCache();
  }
}
