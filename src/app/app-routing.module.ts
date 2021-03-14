import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { DashboardComponent } from './Interfaces/Admin/Pages/Dashboard/dashboard.component';
import { AdminComponent } from './Interfaces/Admin/Pages';
 
const routes: Routes = [  { path: '', component: AdminComponent,
children :[
  { path: '', component: DashboardComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
