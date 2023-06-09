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
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { Courgroupes, EditCourseDialogComponent, detailsCourgroupesDialog } from './courgroupes/courgroupes.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CoursService } from './courgroupes/cours.service';
import { AddCourgroupe } from './add-courgroupe/add-courgroupe.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AppointmentService } from './appointment/appointment.service';
import { Appointment } from './appointment/appointment.component';
import { StatComponent } from 'src/app/admin/dashboard/stat/stat.component';
import { StudentService } from './student/student.service';
import { student } from './student/student.component';
import { TutorService } from './tutor.service';
import { TutorComponent } from './tutor/tutor.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsService } from './transactions/transactions.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  imports: [
    CommonModule,
    DashboardTutorRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,MatPaginatorModule,MatChipsModule,MatSnackBarModule,
    MatIconModule,MatFormFieldModule,MatSelectModule,FormsModule,MatDialogModule,MatInputModule, MatCheckboxModule,NgxMaterialTimepickerModule
  ],
  declarations: [TutorProfileComponent,detailsCourgroupesDialog,EditCourseDialogComponent,Courgroupes,AddCourgroupe,Appointment,StatComponent,student,TutorComponent,TransactionsComponent],
  providers: [CoursService,AppointmentService,StudentService,TutorService,TransactionsService]
})
export class DashboardTutorModule {}
