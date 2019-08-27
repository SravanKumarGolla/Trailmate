import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class PatientSurveyPage implements OnInit {
  questions: any[];
  mobile:boolean;
  constructor(private service: QuestionService) { 
 
    this.questions = this.service.getSurveyQuestionnaire();
    console.log('this.questions :' + JSON.stringify(this.questions))
  }

  ngOnInit() {
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
  }

}
