import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CreateQuestionComponent } from '../create-question/create-question.component';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SurveyService } from '../survey.service';

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
  mediaURL: any;
  qTitle : String;
  constructor(private dialog:MatDialog, private formBuilder: FormBuilder, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private serveyService: SurveyService) {
    
    this.route.params.subscribe(param => {
      console.log(param);
      // this.mediaURL = param.url;
      this.mediaURL = param.url ? this._sanitizer.bypassSecurityTrustResourceUrl(param.url) : '';   
      this.qTitle = param.name;
    });
  }

  ngOnInit() {
    this.questionList = [];
  }

  addQuestion(): void {
    const dialogRef = this.dialog.open(CreateQuestionComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result!=undefined){
        let obj: questionInterface = {
          qId : this.cnt,
          qType: result.qType,
          qStatement: result.qStatement,
          qOptionList: result.qOptionList
        }
        this.cnt++;
        console.log(this.questionList, " ", typeof this.questionList);
        
        this.questionList.push(obj);
      }
      
    });
  }

  removeQuestion(ques){
    this.questionList = this.questionList.filter((elem, idx) => {
      if(elem.qId!==ques.qId){
        return elem;
      }
    })
  }

  createForm(){
    let qArray = this.questionList.map((elem) => {
      let obj = {
        answers : [],
        options : elem.qOptionList,
        type: elem.qType,
        question: elem.qStatement
      }
      return obj;
    })
    let obj = {
      sid: sessionStorage.getItem("email"),
      start: new Date().toLocaleDateString(),
      end: new Date().toLocaleDateString(),
      questions: qArray
    }

    this.serveyService.insertSurvey(obj).subscribe((result) => {
      console.log("DONE");
      
    },
    (err) => {
      console.log(err);
      
    });
  }

}
