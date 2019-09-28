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
      labels: ['Option-A','Option-B','Option-C','Option-D'],
      datasets: [
          {
              data: [170, 57, 96, 107],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#36A2E5"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#36A2E5"
              ]
          }]    
      };
  }

  ngOnInit() {
  }

}
