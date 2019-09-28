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

import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenerateSurveyComponent } from './generate-survey/generate-survey.component';
import { CreateQuestionComponent } from './create-question/create-question.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('463283152425-im6kcpmf036p3aig6hhdqprqr7icfl0t.apps.googleusercontent.com')
  },
])

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateSurveyComponent,
    PageNotFoundComponent,
    MySurveysComponent,
    LoginComponent,
    GenerateSurveyComponent,
    CreateQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateQuestionComponent
  ]
})
export class AppModule { }
