import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TeacherDashboardRoutingModule } from './teacher-dashboard-routing.module';


import { LayoutTutorComponent } from '../admin/layout/layout-tutor.component';
import { TopNavTutorComponent } from '../admin/layout/top-nav-tutor/top-nav-tutor.component';
import { SideNavComponent } from '../admin/layout/side-nav/side-nav.component';



@NgModule({
  imports: [
    CommonModule,
    TeacherDashboardRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule


  ],
  declarations: [LayoutTutorComponent,TopNavTutorComponent,SideNavComponent]
})
export class TeacherDashboardModule {}
