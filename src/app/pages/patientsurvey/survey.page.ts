import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class PatientSurveyPage implements OnInit {
  questions: any[];
  constructor(private service: QuestionService) { 
    debugger
    this.questions = this.service.getQuestions();
    console.log('this.questions :' + JSON.stringify(this.questions))
  }

  ngOnInit() {
    
  }

}
