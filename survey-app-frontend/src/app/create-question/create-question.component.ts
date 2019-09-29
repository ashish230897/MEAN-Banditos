import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  tempForm: FormGroup;
  questionTypes: Array<any> = [
    {value: "descriptive", viewValue: "Descriptive"},
    {value: "binary", viewValue: "True/False"},
    {value: "multiChoice", viewValue: "Multiple Choice"},
    {value: "singleChoice", viewValue: "Single Choice"},
  ];

  counter = 0;
  selectable = true;
  removable = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("HeLLO");
    
    
    this.tempForm = this.formBuilder.group({
      qType : ['', Validators.required],
      qStatement: ['',Validators.required],
      qOptionList : this.formBuilder.array([])
    });
  }

  addOption(val){
    const optListControl = this.tempForm.controls.qOptionList as FormArray;
    this.counter++;
    optListControl.push(this.formBuilder.group({
      id: this.counter,
      value: val
    }))
    console.log(this.counter, "    ", val);
    
  }

  removeOption(option){
    console.log(option);
    const optListControl = this.tempForm.controls.qOptionList as FormArray;
    let index = -1;
    let temp = optListControl.value.find((each,idx) => {
      console.log(each, "  ----   " , idx);
      if(each.id===option.id){
        index = idx;
        return true;
      }
      
    })

    console.log(temp, " TEMP " , index);
    if(index!=-1)
      optListControl.removeAt(index);
    


  }

  // saveOption(id, value){
  //   // console.log("  ", id, value);
    
  //   // const optListControl = this.tempForm.controls.qOptions as FormArray;
  //   // let index = optListControl.value.find((each,idx) => {
  //   //   console.log(each," ", idx);
      
  //   //   if(each.id==id){
  //   //     return idx;
  //   //   }
  //   // });

  //   // optListControl.removeAt(index);

  //   // optListControl.push(this.formBuilder.group({
  //   //   id: id,
  //   //   textValue: value
  //   // }))
  // }

  // deleteOption(data){
  //   // const optListControl = this.tempForm.controls.qOptions as FormArray;

  //   // let index = optListControl.value.find((each,idx) => {
  //   //   console.log(each," ", idx);
      
  //   //   if(each.id==data.id){
  //   //     return idx;
  //   //   }
  //   // });

  //   // optListControl.removeAt(index);

  // }

}
