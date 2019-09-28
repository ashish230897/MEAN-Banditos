import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MySurveysComponent } from './my-surveys/my-surveys.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { GenerateSurveyComponent } from './generate-survey/generate-survey.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { TakeSurveyComponent } from './take-survey/take-survey.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'createSurvey', component: CreateSurveyComponent, canActivate: [AuthGuard]  },
  { path: 'mySurvey', component: MySurveysComponent, canActivate: [AuthGuard]  },
  { path: 'createQuestion', component: CreateQuestionComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent},
  { path: 'collectsurvey', component: TakeSurveyComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
