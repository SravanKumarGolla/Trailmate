export class SurveyQuestionnaireVM {
    Id:number;
   PatientId:number;
   VisitId:number;
   VisitDescription:string;

   QuestionType:string;
   QuestionText:string;

   RiskResponse:string;
   Choices:string[];
   SurveyId:number;
   SurveyDescription:string;
   Response:string;

   IsSurveyResponded:boolean;
 }