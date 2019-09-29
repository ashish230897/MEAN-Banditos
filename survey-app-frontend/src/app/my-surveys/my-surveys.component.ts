import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface audioType{
  title: String;
  description:String;
}

@Component({
  selector: 'app-my-surveys',
  templateUrl: './my-surveys.component.html',
  styleUrls: ['./my-surveys.component.css']
})
export class MySurveysComponent implements OnInit {

  surveyList: audioType[] = [
    {
      title: "Title",
      description: "Description"
    },
    {
      title: "A",
      description: "B"
    },
    {
      title: "A",
      description: "B"
    }
  ];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  analyzeSurvey(){
    this.router.navigate(['/showanalysis']);
  }

  deleteSurvey(){
    console.log("Delete Survey");
    
  }

}
