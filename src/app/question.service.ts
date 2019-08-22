import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import {RadioButtonQuestion} from './question-radio'
@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {
    debugger
    let questions: QuestionBase<any>[] = [

        new DropdownQuestion({
            key: 'visitrating',
            label: 'Visit Rating',
            options: [
              {key: 'awesome',  value: 'Awesome'},
              {key: 'excellent',  value: 'Excellent'},
              {key: 'good',   value: 'Good'},
              {key: 'worst', value: 'Worst'}
            ],
            order: 3
          }),
    
          new TextboxQuestion({
            key: 'firstName',
            label: 'First name',
            value: ' ',
            required: true,
            order: 1
          }),
    
          new TextboxQuestion({
            key: 'emailAddress',
            label: 'Email',
            type: 'email',
            order: 2
          }),
          new RadioButtonQuestion({
            key: 'trailexperience',
            label: 'Trail Experience',
            options: [
                {key: 'awesome',  value: 'Awesome'},
                {key: 'excellent',  value: 'Excellent'},
                {key: 'good',   value: 'Good'},
                {key: 'worst', value: 'Worst'}
              ],
            order: 4
          })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
