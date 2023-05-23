import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

interface Place {
  imgSrc: string;
  name: string;
  nameuser: string;
  prix: string;
  location: string;
  date: string;
  nbplacsrestantes: string;
}

@Component({
  selector: 'app-group-class-detail',
  templateUrl: './group-class-detail.component.html',
  styleUrls: ['./group-class-detail.component.scss']
})
export class GroupClassDetailComponent implements OnInit {
 
  constructor() {}
  ngOnInit() {
   
  }
}
