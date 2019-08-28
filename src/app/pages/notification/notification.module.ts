import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotificationPage } from './notification.page';
import { TabsPageRoutingModule } from './tabs.router.module';

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
    TabsPageRoutingModule
  ],
  declarations: [NotificationPage]
})
export class NotificationPageModule {

  
}
