import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { HomeComponent } from './home/home.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { OfficersComponent } from './officers/officers.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'results', component: ResultsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'company/:id', component: CompanyDetailComponent },
  { path: 'officers/:id', component: OfficersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }