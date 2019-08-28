import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import {RadioButtonQuestion} from './question-radio'
import { ApiService } from './trialmate.service';
import { SurveyQuestionnaireVM } from './models/SurveyQuestionnaireVM';
import { QuestionControlService } from './question-control.service';
import { FormGroup } from '@angular/forms';

@Injectable()
export class QuestionService {
  surveyQuestionnaire:SurveyQuestionnaireVM[]=[];

  form: FormGroup;
  payLoad = '';
  
  questions: QuestionBase<any>[]=[]; 
  constructor(private trailmateService: ApiService,private qcs: QuestionControlService) {}

getSurveyQuestionnaire(){
  
  let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
          key: '1',
          label: ' Question Text 1 ',
          options: [
            {key: 'Awesome',  value: 'Awesome'},
            {key: 'Excellent',  value: 'Excellent'},
            {key: 'Good',   value: 'Good'},
            {key: 'Bad', value: 'Bad'}
          ],
          order: 3
        }),
  
        new TextboxQuestion({
          key: '2',
          label: ' Question Text 2 ',
          value: ' ',
          order: 1
        }),
  
        new TextboxQuestion({
          key: '3',
          label: ' Question Text 3',
          value: ' ',
          order: 2
        }),
        new RadioButtonQuestion({
          key: '4',
          label: ' Question Text 4 ',
          options: [
            {key: 'Awesome',  value: 'Awesome'},
            {key: 'Excellent',  value: 'Excellent'},
            {key: 'Good',   value: 'Good'},
            {key: 'Bad', value: 'Bad'}
            ],
          order: 4
        }),
        new DropdownQuestion({
          key: '5',
          label: ' Question Text 5 ',
          options: [
            {key: 'Awesome',  value: 'Awesome'},
            {key: 'Excellent',  value: 'Excellent'},
            {key: 'Good',   value: 'Good'},
            {key: 'Bad', value: 'Bad'}
            ],
          order: 5
        }),
        new RadioButtonQuestion({
          key: '6',
          label: ' Question Text 6',
          options: [
            {key: 'Awesome',  value: 'Awesome'},
            {key: 'Excellent',  value: 'Excellent'},
            {key: 'Good',   value: 'Good'},
            {key: 'Bad', value: 'Bad'}
            ],
          order : 6
        })
  ];

  return questions.sort((a, b) => a.order - b.order);
}

//  this.trailmateService.getSurveyQuestionnaire(1,1).subscribe
//     (result => {
//       this.surveyQuestionnaire = result
//       console.log('SurveyQuestionnaire')
//       console.log(JSON.stringify(result))
//       let setOrder = 1;

//       for(let question of this.surveyQuestionnaire){
//          if(question.QuestionType == 'Radio'){
//              this.questions.push(new RadioButtonQuestion({
//               key: question.Id.toString(),
//               label: question.QuestionText,
//               options: [
//                 {key: 'Awesome',  value: 'Awesome'},
//                 {key: 'Excellent',  value: 'Excellent'},
//                 {key: 'Good',   value: 'Good'},
//                 {key: 'Worst', value: 'Worst'}
//               ],
//               order: setOrder
//             }))
//          }
//          else if(question.QuestionType == 'Dropdown'){
//             this.questions.push(new DropdownQuestion({
//                 key:  question.Id.toString(),
//                 label: question.QuestionText,
//                 options: [
//                 {key: 'Awesome',  value: 'Awesome'},
//                 {key: 'Excellent',  value: 'Excellent'},
//                 {key: 'Good',   value: 'Good'},
//                 {key: 'Worst', value: 'Worst'}
//                 ],
//                 order: setOrder
//               }))
//          }
//          else if(question.QuestionType == 'Text'){
//             this.questions.push(new TextboxQuestion({
//                 key: question.Id.toString(),
//                 label: question.QuestionText,
//                 value: ' ',
//                 required: true,
//                 order: setOrder
//               }))
//          }
//          setOrder = setOrder +  1
  
//       }
//       this.questions =this.questions.sort((a, b) => a.order - b.order);
//       console.log(' *** this.questions *** ' + JSON.stringify(this.questions))
    
//       return this.questions;
      
     
    
//     });

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous

  // {key: 'Awesome',  value: 'Awesome'},
  // {key: 'Excellent',  value: 'Excellent'},
  // {key: 'Good',   value: 'Good'},
  // {key: 'Bad', value: 'Bad'}

  getQuestions() {
    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
          key: '12',
          label: 'How was your overall site visit?',
          options: [
            {key: 'Good',  value: 'Good'},
            {key: 'Bad',  value: 'Bad'}
          ],
          
          order: 1
        }),
  
        new DropdownQuestion({
          key: '13',
          label: 'How was the Trial Site infrastructure for you ?',
          options: [
            {key: 'Good',  value: 'Good'},
            {key: 'Bad',  value: 'Bad'}
          ],
          
          order: 2
        }),
  
        new RadioButtonQuestion({
          key: '10',
          label: ' Do you feel happy about the incentives provided to you?',
          options: [
            {key: 'Good',  value: 'Yes'},
            {key: 'Bad',  value: 'No'},            
            ],
          order: 3
        }),
        new RadioButtonQuestion({
          key: '8',
          label: ' Do you feel the investigative process is expeditious?',
          options: [
            {key: 'Good',  value: 'Yes'},
            {key: 'Bad',  value: 'No'},            
            ],          
          order: 4
        }),
        new RadioButtonQuestion({
          key: '9',
          label: ' Do you feel the Site investigator is intimidating?',
          options: [
            {key: 'Bad',  value: 'Yes'},
            {key: 'Good',  value: 'No'},            
            ],  
          order: 5
        }),
        new RadioButtonQuestion({
          key: '11',
          label: ' Did you feel difficulty in reaching the site?',
          options: [
            {key: 'Bad',  value: 'Yes'},
            {key: 'Good',  value: 'No'},            
            ],         
          order :  6
        }),
        new RadioButtonQuestion({
          key: '14',
          label: ' Do you still have a feeling of worriness on side effects?',
          options: [
            {key: 'Bad',  value: 'Yes'},
            {key: 'Good',  value: 'No'},            
            ],         
          order :  7
        })
  ];

  return questions.sort((a, b) => a.order - b.order);
  }
}
