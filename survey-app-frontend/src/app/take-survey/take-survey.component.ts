import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.css']
})
export class TakeSurveyComponent implements OnInit {


  survey = {
    title: 'Social Media Usage',
    pathname: 'https://www.youtube.com/embed/1JLUn2DFW4w',
    questions: [
      {
        qId: 'S1',
        type: 3,
        question: "According to you, describe briefly various benefits of SM.",
      },
      {
        qId: 'G3',
        type: 2,
        question: "Which of the following times do you use SM",
        options: [
          "1",
          "16",
          "22",
          "9",
        ],
      },
      {
        qId: 'G3',
        type: 1,
        question: "Which of the following times do you use SM",
        options: [
          "1",
          "16",
          "22",
          "9",
        ],
      },
    ],
    start: "2019-05-19",
    end: "2019-05-29",
  };

  answers = [];
  safeUrl: any;

  constructor( private _sanitizer: DomSanitizer) {
    this.safeUrl = this.survey && this.survey.pathname ? this._sanitizer.bypassSecurityTrustResourceUrl(this.survey.pathname) : '';
  }

  ngOnInit() {
  }


}
