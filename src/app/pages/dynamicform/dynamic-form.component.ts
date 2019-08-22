import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../../question-base'
import { QuestionControlService }    from '../../question-control.service';
import { debug } from 'util';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  questionDetails: any[];
  constructor(private qcs: QuestionControlService,private service: QuestionService) {  
      debugger
      this.questionDetails = this.service.getQuestions();
      console.log('this.questions' + JSON.stringify(this.questionDetails))
    this.form = this.qcs.toFormGroup(this.questionDetails);
    //console.log(' this.form :' + JSON.stringify(this.form))
  }

  ngOnInit() {

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log('payload' + JSON.stringify(this.form.value))
  }
}
