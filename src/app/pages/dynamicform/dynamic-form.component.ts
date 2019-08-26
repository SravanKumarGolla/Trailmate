import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../../question-base'
import { QuestionControlService }    from '../../question-control.service';
import { debug } from 'util';
import { QuestionService } from 'src/app/question.service';
import { PatientSurveyQuestionnaireVM } from 'src/app/models/PatientSurveyQuestionnaire';
import { ApiService } from 'src/app/trialmate.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {
  patientSurveyQuestionnaire:PatientSurveyQuestionnaireVM[]=[];
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  questionDetails: any[];
  constructor(private qcs: QuestionControlService,private service: QuestionService, private trialmateService : ApiService) {  
      debugger
      this.questionDetails = this.service.getQuestions();
      console.log('this.questions' + JSON.stringify(this.questionDetails))
    this.form = this.qcs.toFormGroup(this.questionDetails);
    //console.log(' this.form :' + JSON.stringify(this.form))
  }

  ngOnInit() {

  }

  onSubmit() {
    debugger;
    this.patientSurveyQuestionnaire= [];
    this.payLoad = this.form.value;
    console.log('payload' + JSON.stringify(this.form.value))
    debugger;
    let arr = [8,9,10,11,12,13]
    var patientSQ :any
    for(let questionId of arr){
      debugger;
      let response= this.payLoad[questionId];
      patientSQ = (function () {
        var patientSQ = new PatientSurveyQuestionnaireVM();
        patientSQ.Id = questionId;
        patientSQ.Response = response;
        patientSQ.PatientId = 1,
        patientSQ.VisitId = 2
        return patientSQ;
      })();
     this.patientSurveyQuestionnaire.push(patientSQ)
    }
    console.log('this.patientSurveyQuestionnaire : '  + this.patientSurveyQuestionnaire)
   this.trialmateService.postSurveyQuestionnaire(this.patientSurveyQuestionnaire).subscribe(
     result=>
     {
       debugger
       console.log(JSON.stringify(result))
     }
   );
  }
}