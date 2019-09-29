import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  allSurveyUrl = "http://localhost:3000/getsurveys";
  surveyDetailsUrl = "http://localhost:3000/getsurveydetails";
  insertSurveyUrl = "http://localhost:3000/insertSurvey";

  constructor(private http: HttpClient) { }

  getAllSurveys(orgId: String) : Observable<any> {
    return this.http.get(this.allSurveyUrl + `/${orgId}`);
  }

  getSurveyDetails(surveyId: String) : Observable<any> {
    return this.http.get(this.surveyDetailsUrl + `/${surveyId}`);
  }

  insertSurvey(obj:any): Observable<any> {
    console.log(obj);
    
    return this.http.post(this.insertSurveyUrl, obj);
  }
}
