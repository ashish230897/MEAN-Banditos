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
      title: "Title - 1",
      description: "Description - 1"
    },
    {
      title: "Title - 2",
      description: "Description - 2"
    },
    {
      title: "Title - 3",
      description: "Description - 3"
    },
    {
      title: "Title - 4",
      description: "Description - 4"
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
