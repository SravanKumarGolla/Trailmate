import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from '../../question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { 
    //   console.log('this.question ' + JSON.stringify(this.question))
    //   console.log(JSON.stringify(this.form.controls))
    //   return true;
      return this.form.controls[this.question.key].valid;
     }
     radioGroupChange(event){
          console.log('event' + JSON.stringify ( event))
     }
}
