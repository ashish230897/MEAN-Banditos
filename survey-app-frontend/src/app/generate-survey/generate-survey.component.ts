import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-survey',
  templateUrl: './generate-survey.component.html',
  styleUrls: ['./generate-survey.component.css']
})
export class GenerateSurveyComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  surveyTypes: Array<any> = [
    {value:"Audio", viewValue:"Audio"},
    {value:"Video", viewValue:"Video"},
    {value:"Text", viewValue:"Text"}
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      surveyTypeSelect: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  createSurvey(){
    console.log(this.secondFormGroup);
    this.router.navigate(['/createSurvey/',this.firstFormGroup.value]);
  }

}


