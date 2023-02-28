import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './dashboard/application/application.component';
import { DashboardComponent } from './dashboard/dashboard.component';





const routes: Routes = [
  { path: '', component:DashboardComponent },
  { path: 'apply', component:ApplicationComponent },
  
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
