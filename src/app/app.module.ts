import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserLoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './trialmate.service';
import { DynamicFormComponent } from './pages/dynamicform/dynamic-form.component';
import { DynamicFormQuestionComponent } from './pages/dynamicformquestion/dynamic-form-question.component';
import { PatientSurveyPageModule } from './pages/patientsurvey/survey.module';
import { DisplaySurveyPageModule } from './pages/displaysurvey/displaysurvey.module';

@NgModule({
  declarations: [AppComponent,UserLoginComponent],
  entryComponents: [],
  imports: [BrowserModule,ReactiveFormsModule,  IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule],
  providers: [
    AuthenticationService,
    StatusBar,
    SplashScreen,
    ApiService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
