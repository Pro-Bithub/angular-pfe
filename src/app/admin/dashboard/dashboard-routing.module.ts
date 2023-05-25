import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Courgroupes } from './courgroupes/courgroupes.component';
import { Teachers } from './teachers/teachers.component';
import { MyGroupCourses } from './myGroupCourses/myGroupCourses.component';
import { GroupClassDetailComponent } from './group-class-detail/group-class-detail.component';
import { MyTeachersComponent } from './myTeachers/myTeachers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
},
{
  path: 'group-courses',
  component: Courgroupes
},
{ path: 'group-class/detail/:id', component: GroupClassDetailComponent },
{
  path: 'teachers',
  component: Teachers
},
{
  path: 'my-group-courses',
  component: MyGroupCourses
},
{
  path: 'my-teachers',
  component: MyTeachersComponent 
},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
