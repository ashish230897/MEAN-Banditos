import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CreateQuestionComponent } from '../create-question/create-question.component';

interface questionInterface{
  qId : Number;
  qType: String;
  qStatement: String;
  qOptionList: Array<any>;
}

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css'],
  entryComponents: [CreateQuestionComponent]
})
export class CreateSurveyComponent implements OnInit {

  questionList: Array<questionInterface>;
  cnt = 0;

  constructor(private dialog:MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.questionList = [];
  }

  addQuestion(): void {
    const dialogRef = this.dialog.open(CreateQuestionComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      let obj: questionInterface = {
        qId : this.cnt,
        qType: result.qType,
        qStatement: result.qStatement,
        qOptionList: result.qOptionList
      }
      this.cnt++;
      console.log(this.questionList, " ", typeof this.questionList);
      
      this.questionList.push(obj);
    });
  }

  removeQuestion(ques){
    this.questionList = this.questionList.filter((elem, idx) => {
      if(elem.qId!==ques.qId){
        return elem;
      }
    })
  }

}
