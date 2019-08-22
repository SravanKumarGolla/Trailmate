import { QuestionBase } from './question-base';

export class RadioButtonQuestion extends QuestionBase<string> {
  controlType = 'radiobutton';
  options: {key: string, value: string}[] = [];
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
