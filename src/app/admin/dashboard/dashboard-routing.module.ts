import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Courgroupes } from './courgroupes/courgroupes.component';
import { Teachers } from './teachers/teachers.component';
import { MyGroupCourses } from './myGroupCourses/myGroupCourses.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
},
{
  path: 'group-courses',
  component: Courgroupes
},
{
  path: 'teachers',
  component: Teachers
},
{
  path: 'my-group-courses',
  component: MyGroupCourses
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }