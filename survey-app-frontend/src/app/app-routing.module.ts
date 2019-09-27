import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'createSurvey', component: CreateSurveyComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
