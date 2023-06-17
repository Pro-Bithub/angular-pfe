import { Component, OnInit } from '@angular/core';
import { childRoutes } from '../../child-routes';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  showMenu = false;
  routes = childRoutes;
  constructor() {}

  ngOnInit() {}
  isAdminLoggedIn(): boolean {
    const adminData = localStorage.getItem('adminData');
    return !!adminData;
  }

  isTutorLoggedIn(): boolean {
    const TutorData = localStorage.getItem('tuteurData');
    return !!TutorData;
  }
}
