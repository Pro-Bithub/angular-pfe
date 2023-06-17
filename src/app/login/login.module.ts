import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { MatSelectModule } from '@angular/material/select';
import { LoginloginadminComponent } from './loginadmin/loginadmin.component';
import { LoginadminService } from './loginadmin/loginadmin.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    LoginRoutingModule, MatSelectModule,MatSnackBarModule
 
  ],
  declarations: [LoginComponent,LoginloginadminComponent],
  providers: [LoginService,LoginadminService]
})
export class LoginModule {}
