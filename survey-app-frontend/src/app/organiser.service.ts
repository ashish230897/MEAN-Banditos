import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class OrganiserService {

  createOrgUrl = "http://localhost:3000/createOrganiser";
  constructor(private http: HttpClient) { }

  createOrg(obj): Observable<any> {
    console.log("In Organiser Service");
    return this.http.post(this.createOrgUrl, obj);
  }

}
