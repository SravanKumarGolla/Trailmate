import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PatientVM } from './models/PatientVM';
import { SurveyQuestionnaireVM } from './models/SurveyQuestionnaireVM';
import { Observable } from 'rxjs';
import { PatientSurveyQuestionnaireVM } from './models/PatientSurveyQuestionnaire';
import { EngagementContentVM } from './models/EngagementContent';
import { Dashboarddata } from './models/Dashboard';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //apiURL: string = 'http://localhost:63527/api/';
  apiURL: string = 'https://trialmateapi.azurewebsites.net/api';
  constructor(private httpClient: HttpClient) {}

  public getAllPatients(){
    return this.httpClient.get<PatientVM[]>(`${this.apiURL}/Patient`);
}


public getTrialmateDashboard(){
  httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
  httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

  return this.httpClient.get<Dashboarddata[]>(`${this.apiURL}/TrialmateDashboard`);
}

public getSurveyQuestionnaire(patientId,visitId):Observable<any>{
  
  return this.httpClient.get<SurveyQuestionnaireVM[]>(`${this.apiURL}/SurveyQuestionnaire/` + patientId + `/`+ visitId);
}

public postSurveyQuestionnaire(patientSQ:PatientSurveyQuestionnaireVM[]):Observable<any>{

  //return this.httpClient.post(`${this.apiURL}/customers/`,customer);
  return this.httpClient.post(`${this.apiURL}/SurveyQuestionnaire/`,patientSQ);
}

public getEngagementContent(patientId,visitId):Observable<any>{
  
  return this.httpClient.get<EngagementContentVM[]>(`${this.apiURL}/EngagementContent/` + patientId + `/`+ visitId);
}





// async getSurveyQuestionnaire(patientId,visitId){

 
//   let data = await this.httpClient.get<SurveyQuestionnaireVM[]>(`${this.apiURL}/SurveyQuestionnaire/` + patientId + `/`+ visitId).toPromise();
//   console.log('*** data ***' +  JSON.stringify(data))
//   return data;
//   //return this.httpClient.get<SurveyQuestionnaireVM[]>(`${this.apiURL}/SurveyQuestionnaire/` + patientId + `/`+ visitId);
// }
}