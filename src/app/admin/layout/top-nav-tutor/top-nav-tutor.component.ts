import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav-tutor',
  templateUrl: './top-nav-tutor.component.html',
  styleUrls: ['./top-nav-tutor.component.scss']
})
export class TopNavTutorComponent implements OnInit {
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
}
