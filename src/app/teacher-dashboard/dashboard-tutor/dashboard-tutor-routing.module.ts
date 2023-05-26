import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Courgroupes } from './courgroupes/courgroupes.component';


const routes: Routes = [
  {
    path: '',
    component: Courgroupes
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardTutorRoutingModule { }
