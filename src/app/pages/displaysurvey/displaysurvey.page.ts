import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { VisitCalendarDates, VisitDetails, AllDateCollection } from 'src/app/models/reminders';
import { DatePipe } from '@angular/common'
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { retry } from 'rxjs/operators';
import { SurveyQuestionnaireVM } from 'src/app/models/SurveyQuestionnaireVM';
import { ApiService } from 'src/app/trialmate.service';
import { QuestionBase } from 'src/app/question-base';
import { RadioButtonQuestion } from 'src/app/question-radio';
import { DropdownQuestion } from 'src/app/question-dropdown';
import { TextboxQuestion } from 'src/app/question-textbox';
import { QuestionService } from 'src/app/question.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-notification',
    templateUrl: './displaysurvey.page.html',
    styleUrls: ['./displaysurvey.page.scss'],
    providers: [DatePipe]
})
export class DisplaySurveyPage implements OnInit, AfterViewInit {
    questions: any[];
  constructor(private router: Router,private service: QuestionService) { 
   
    this.questions = this.service.getQuestions();
    console.log('this.questions :' + JSON.stringify(this.questions))
  }
  logOut(){ 
    if (localStorage.getItem('currentUser')) { 
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
    } 
  }

  ngOnInit() {
    
  }
    ngAfterViewInit() {

    }
   
   
   

}
