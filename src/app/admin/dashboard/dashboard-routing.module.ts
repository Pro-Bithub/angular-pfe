import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Courgroupes } from './courgroupes/courgroupes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
},
{
  path: 'cours',
  component: Courgroupes
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
