import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { MySurveysComponent } from './my-surveys/my-surveys.component';
import { MaterialModule } from './material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenerateSurveyComponent } from './generate-survey/generate-survey.component';
import { CreateQuestionComponent } from './create-question/create-question.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateSurveyComponent,
    PageNotFoundComponent,
    MySurveysComponent,
    GenerateSurveyComponent,
    CreateQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateQuestionComponent
  ]
})
export class AppModule { }
