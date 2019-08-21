import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UserLoginComponent } from './login/login.component';
 
const routes: Routes = [
  { path: 'login', component:UserLoginComponent },
  { path: 'patient', loadChildren: './pages/patient/patient.module#PatientPageModule'},
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' , canActivate: [AuthGuard]},
 ];
 
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//{ path: '', redirectTo: 'menu', pathMatch: 'full' },


// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
//   { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
//   { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
//   { path: 'notification', loadChildren: './pages/notification/notification.module#NotificationPageModule' },
//   { path: 'survey', loadChildren: './pages/survey/survey.module#SurveyPageModule' },
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
