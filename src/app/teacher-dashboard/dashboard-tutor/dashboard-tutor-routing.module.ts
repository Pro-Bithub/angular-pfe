import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Courgroupes } from './courgroupes/courgroupes.component';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';


const routes: Routes = [
  {
    path: '',
    component: Courgroupes
},
{ path: 'tutor-profile', component: TutorProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardTutorRoutingModule { }
