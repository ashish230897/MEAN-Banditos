import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-analysis',
  templateUrl: './show-analysis.component.html',
  styleUrls: ['./show-analysis.component.css']
})
export class ShowAnalysisComponent implements OnInit {
  dataChart : any;
  constructor() { 
    this.dataChart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#4bc0c0'
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#565656'
          }
      ]
  }
  }

  ngOnInit() {
  }

}
