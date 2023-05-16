import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { StatComponent } from './stat/stat.component';
import { Courgroupes } from './courgroupes/courgroupes.component';
import { DialogContentExampleDialog, Teachers } from './teachers/teachers.component';
import { MyGroupCourses } from './myGroupCourses/myGroupCourses.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,MatPaginatorModule,MatChipsModule,
    MatIconModule,MatFormFieldModule,MatSelectModule,FormsModule,MatDialogModule
  ],
  declarations: [HomeComponent,Courgroupes,MyGroupCourses,Teachers,DialogContentExampleDialog, StatComponent]
})
export class DashboardModule {}
