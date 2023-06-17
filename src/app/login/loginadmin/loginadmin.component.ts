import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginadminService } from './loginadmin.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.scss']
})
export class LoginloginadminComponent implements OnInit {

  isprof:boolean=false
  email: string;
  motdepasse: string;
 
  constructor(private snackBar: MatSnackBar,private router: Router , private  loginService: LoginadminService) {}


  ngOnInit() {}
  onLogin() {
    const userData = {
      email: this.email,
      motdepasse: this.motdepasse
    };
  
    if (userData.email === 'admin' && userData.motdepasse === 'admin') {
      const tuteurDataString = JSON.stringify(userData);
      localStorage.setItem('adminData', tuteurDataString);
      localStorage.setItem('isLoggedin', 'true');
      this.router.navigate(['/fr/dashboard-tutor/tutor']);
    } else {
      this.snackBar.open('Invalid email or password', 'Close', {
        duration: 3000,
        panelClass: 'error-snackbar'
      });
    }
  }


}
