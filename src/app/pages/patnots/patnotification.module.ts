import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { PatTabsPageRoutingModule } from './pattabs.router.module';
import { PatNotificationPage } from './patnotification.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: NotificationPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatTabsPageRoutingModule
  ],
  declarations: [PatNotificationPage]
})
export class PatNotificationPageModule {}
