import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DisplaySurveyPage } from './displaysurvey.page'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalPage } from '../modal/modal.page';
import { DynamicFormComponent } from '../dynamicform/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../dynamicformquestion/dynamic-form-question.component';
import { QuestionService } from 'src/app/question.service';
import { QuestionControlService } from 'src/app/question-control.service';

const routes: Routes = [
  {
    path: '',
    component: DisplaySurveyPage
  }
];

@NgModule({
  // declarations: [DisplaySurveyPage,ModalPage,DynamicFormComponent,DynamicFormQuestionComponent],
  declarations: [DisplaySurveyPage,DynamicFormComponent,DynamicFormQuestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  // entryComponents: [ModalPage],
  providers:  [QuestionService,QuestionControlService]
})
export class DisplaySurveyPageModule {}
