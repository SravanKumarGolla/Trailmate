import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationPage } from './notification.page'
const routes: Routes = [
    {
      path: '',
      component: NotificationPage,
      children: [
        {
          path: 'tab1',
          children: [
            {
              path: '',
              loadChildren: '../tab1/tab1.module#Tab1PageModule'
            }
          ]
        },
        {
          path: 'tab2',
          children: [
            {
              path: '',
              loadChildren: '../tab2/tab2.module#Tab2PageModule'
            }
          ]
        },
        {
          path: 'tab3',
          children: [
            {
              path: '',
              loadChildren: '../tab3/tab3.module#Tab3PageModule'
            }
          ]
        },
        {
          path: '',
          redirectTo: 'notifications/tab1',
          pathMatch: 'full'
        }
  ]
    }
  ];
// const routes: Routes = [
//   {
//     path: '/menu/notifications/tab1',
//     component: NotificationPage,
//     children: [
//       {
//         path: 'tab1',
//         children: [
//           {
//             path: '',
//             loadChildren: '../tab1/tab1.module#Tab1PageModule'
//           }
//         ]
//       },
//       {
//         path: 'tab2',
//         children: [
//           {
//             path: '',
//             loadChildren: '../tab2/tab2.module#Tab2PageModule'
//           }
//         ]
//       },
//       {
//         path: 'tab3',
//         children: [
//           {
//             path: '',
//             loadChildren: '../tab3/tab3.module#Tab3PageModule'
//           }
//         ]
//       },
//       {
//         path: '',
//         redirectTo: '/menu/notifications/tab1',
//         pathMatch: 'full'
//       }
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/menu/notifications/tab1',
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}