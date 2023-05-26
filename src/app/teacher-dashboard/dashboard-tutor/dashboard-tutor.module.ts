import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardTutorRoutingModule } from './dashboard-tutor-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  imports: [
    CommonModule,
    DashboardTutorRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,MatPaginatorModule,MatChipsModule,
    MatIconModule,MatFormFieldModule,MatSelectModule,FormsModule,MatDialogModule
  ],
  declarations: []
})
export class DashboardTutorModule {}
