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
import { GroupClassDetailComponent } from './group-class-detail/group-class-detail.component';
import { FilterTeachersPipe } from './teachers/filter-teachers.pipe';
import { FilterCourGroupesPipe } from './courgroupes/filter-cours.pipe';
import { MyTeachersComponent } from './myTeachers/myTeachers.component';
import { TeachersService } from './teachers/teachers.service';
import { CoursService } from './courgroupes/cours.service';
import { ConfirmationDialogComponent } from './teachers/confirmation-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PaymentComponent } from './payment/payment.component';
import { EtudiantProfileComponent } from './etudiant-profile/etudiant-profile.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,MatPaginatorModule,MatChipsModule,
    MatIconModule,MatFormFieldModule,MatSelectModule,FormsModule,MatDialogModule,MatSnackBarModule,MatInputModule, MatCheckboxModule,NgxMaterialTimepickerModule
  ],
  declarations: [EtudiantProfileComponent,PaymentComponent,HomeComponent,Courgroupes,ConfirmationDialogComponent,MyTeachersComponent,MyGroupCourses,Teachers,DialogContentExampleDialog,GroupClassDetailComponent,FilterTeachersPipe,FilterCourGroupesPipe],
  providers: [TeachersService,CoursService]
})
export class DashboardModule {}
