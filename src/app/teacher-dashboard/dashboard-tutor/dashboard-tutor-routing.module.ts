import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Courgroupes } from './courgroupes/courgroupes.component';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { AddCourgroupe } from './add-courgroupe/add-courgroupe.component';
import { Appointment } from './appointment/appointment.component';
import { student } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AdminauthGuard } from 'src/app/core/Adminauth.guard';
import { TutorAuthGuard } from 'src/app/core/tutorauth.guard';


const routes: Routes = [
  {
    path: 'cours',
    component: Courgroupes ,canActivate: [TutorAuthGuard] 
},
{
  path: 'add-course',
  component: AddCourgroupe  ,canActivate: [TutorAuthGuard] 
},
{
  path: 'appointment',
  component: Appointment  ,canActivate: [TutorAuthGuard]  
},
{
  path: 'student',
  component: student ,canActivate: [AdminauthGuard] 
},
{
  path: 'tutor',
  component: TutorComponent ,canActivate: [AdminauthGuard] 
},
{
  path: 'transactions',
  component: TransactionsComponent ,canActivate: [AdminauthGuard] 
},


{ path: 'tutor-profile', component: TutorProfileComponent ,canActivate: [TutorAuthGuard]  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardTutorRoutingModule { }
