import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
   isprof:boolean=false
  constructor(private router: Router,private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['isprof']=='tutor')
      this.isprof =true;
      else
      this.isprof =false;
      console.log(this.isprof ); // or use the parameter value as needed
    });
  }
  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
  }
}
