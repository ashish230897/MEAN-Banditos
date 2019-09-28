import { Component, OnInit } from '@angular/core';

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

  audioItems: audioType[] = [
    {
      title: "A",
      description: "B"
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

  videoItems: audioType[] = [
    {
      title: "Abcsac",
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

  textItems: audioType[] = [
    {
      title: "A",
      description: "B"
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

  constructor() { }

  ngOnInit() {
  }

}
