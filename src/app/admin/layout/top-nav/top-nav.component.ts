import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();

  constructor(private readonly router: Router) {}

  ngOnInit() {}

  toggleSidebar() {
    this.sideNavToggled.emit();
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem("tuteurData");
    localStorage.removeItem("etudiantData");
    localStorage.removeItem('adminData' );
    this.router.navigate(['/login']);
  }

  isConnected(): boolean {
    const adminData = localStorage.getItem('adminData');
    const TutorData = localStorage.getItem('tuteurData');
    const etudiantData = localStorage.getItem('etudiantData');
    return !!adminData ||  !!TutorData || !!etudiantData ; 
  }
  isEtudiantLoggedIn(): boolean {
    const etudiantData = localStorage.getItem('etudiantData');
    return  !!etudiantData ; 
  }

  

  
}
