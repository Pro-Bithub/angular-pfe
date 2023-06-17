import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    SignupRoutingModule,MatSnackBarModule
  ],
  declarations: [SignupComponent],
  providers: [SignupService]
})
export class SignupModule {}
