import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SurveyPage } from './survey.page';
import { ApiService } from 'src/app/trialmate.service';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { ModalPage } from '../modal/modal.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalVisitPage } from '../modal/modal.visit';

const routes: Routes = [
  {
    path: '',
    component: SurveyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  providers: [ApiService,SpinnerDialog],
  declarations: [SurveyPage,ModalVisitPage],
  entryComponents: [ModalVisitPage] 
})
export class SurveyPageModule {}
