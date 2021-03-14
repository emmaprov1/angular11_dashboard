
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { DashboardComponent, AdminComponent } from './Pages';
 
const routes: Routes = [
    {   path: 'admin', component: AdminComponent,
        children :[
            { path: 'dashboard', component: DashboardComponent}
        ]
    },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
 