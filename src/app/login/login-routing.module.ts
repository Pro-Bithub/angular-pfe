import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginloginadminComponent } from './loginadmin/loginadmin.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: LoginloginadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
