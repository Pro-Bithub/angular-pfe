import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Courgroupes } from './courgroupes/courgroupes.component';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { AddCourgroupe } from './add-courgroupe/add-courgroupe.component';
import { Appointment } from './appointment/appointment.component';
import { student } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';
import { TransactionsComponent } from './transactions/transactions.component';


const routes: Routes = [
  {
    path: 'cours',
    component: Courgroupes
},
{
  path: 'add-course',
  component: AddCourgroupe
},
{
  path: 'appointment',
  component: Appointment
},
{
  path: 'student',
  component: student
},
{
  path: 'tutor',
  component: TutorComponent
},
{
  path: 'transactions',
  component: TransactionsComponent
},


{ path: 'tutor-profile', component: TutorProfileComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardTutorRoutingModule { }
