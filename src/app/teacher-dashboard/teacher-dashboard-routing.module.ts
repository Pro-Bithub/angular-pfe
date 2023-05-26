import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutTutorComponent } from '../admin/layout/layout-tutor.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutTutorComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard-tutor'
      } ,
       {
        path: 'dashboard-tutor',
        loadChildren: () =>
          import('./dashboard-tutor/dashboard-tutor.module').then(m => m.DashboardTutorModule),
        data: { icon: 'dashboard', text: 'Dashboard' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherDashboardRoutingModule {}
