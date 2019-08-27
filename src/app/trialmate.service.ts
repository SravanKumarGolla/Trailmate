import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientVM } from './models/PatientVM';
import { SurveyQuestionnaireVM } from './models/SurveyQuestionnaireVM';
import { Observable } from 'rxjs';
import { PatientSurveyQuestionnaireVM } from './models/PatientSurveyQuestionnaire';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //// apiURL: string = 'http://localhost:63527/api/';
  apiURL: string = 'https://trialmateapi.azurewebsites.net/api';
  constructor(private httpClient: HttpClient) {}

  public getAllPatients(){
    return this.httpClient.get<PatientVM[]>(`${this.apiURL}/Patient`);
}

public getSurveyQuestionnaire(patientId,visitId):Observable<any>{
  
  return this.httpClient.get<SurveyQuestionnaireVM[]>(`${this.apiURL}/SurveyQuestionnaire/` + patientId + `/`+ visitId);
}

public postSurveyQuestionnaire(patientSQ:PatientSurveyQuestionnaireVM[]):Observable<any>{

  //return this.httpClient.post(`${this.apiURL}/customers/`,customer);
  return this.httpClient.post(`${this.apiURL}/SurveyQuestionnaire/`,patientSQ);
}




// async getSurveyQuestionnaire(patientId,visitId){
//   debugger
 
//   let data = await this.httpClient.get<SurveyQuestionnaireVM[]>(`${this.apiURL}/SurveyQuestionnaire/` + patientId + `/`+ visitId).toPromise();
//   console.log('*** data ***' +  JSON.stringify(data))
//   return data;
//   //return this.httpClient.get<SurveyQuestionnaireVM[]>(`${this.apiURL}/SurveyQuestionnaire/` + patientId + `/`+ visitId);
// }
}