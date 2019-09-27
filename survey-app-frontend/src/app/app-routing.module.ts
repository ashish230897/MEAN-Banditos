import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MySurveysComponent } from './my-surveys/my-surveys.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { GenerateSurveyComponent } from './generate-survey/generate-survey.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'createSurvey', component: CreateSurveyComponent },
  { path: 'mySurvey', component: MySurveysComponent },
  { path: 'createQuestion', component: CreateQuestionComponent },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
