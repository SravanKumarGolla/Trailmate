import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PatientNotificationPage } from './notification.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalPage } from '../modal/modal.page';

const routes: Routes = [
  {
    path: '',
    component: PatientNotificationPage
  }
];

@NgModule({
  declarations: [PatientNotificationPage,ModalPage ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ModalPage]
 
})
export class PatientNotificationPageModule {}
