import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  allSurveyUrl = "localhost:3000/getsurveys";
  surveyDetailsUrl = "localhost:3000/getsurveydetails";

  constructor(private http: HttpClient) { }

  getAllSurveys(orgId: String) : Observable<any> {
    return this.http.get(this.allSurveyUrl + `/${orgId}`);
  }

  getSurveyDetails(surveyId: String) : Observable<any> {
    return this.http.get(this.surveyDetailsUrl + `/${surveyId}`);
  }
}
