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
  id:Number;
}

@Component({
  selector: 'app-courgroupes',
  templateUrl: './courgroupes.component.html',
  styleUrls: ['./courgroupes.component.scss']
})
export class Courgroupes implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  courgroupes: Array<Place> = [];
  selected = 'option2';
  selectedLanguage: string = 'option1';
  selectedniveaux: string = 'option1';
  selectedjour: string = 'option1';
  selectedheure: string = 'option1';
  value = 'Clear me';
  constructor() {}
  ngOnInit() {
    this.courgroupes = [
      {
        imgSrc: 'assets/images/card-1.jpg',
        name: 'Cozy 5 Stars Apartment',
        nameuser: `Rosalind Dott`,
        prix: '899',
        location: 'Barcelona, Spain',
       date: '07:00 - 08:00 lundi, 15 mai 2023',
       nbplacsrestantes:'5',
       id:1
      },
      {
        imgSrc: 'assets/images/card-2.jpg',
        name: 'Cozy 5 Stars Apartment',
        nameuser: `Rosalind Dott`,
        prix: '899',
        location: 'Barcelona, Spain',
       date: '07:00 - 08:00 lundi, 15 mai 2023',
        nbplacsrestantes:'3',
        id:1
      },
      {
        imgSrc: 'assets/images/card-3.jpg',
        name: 'Cozy 5 Stars Apartment',
        nameuser: `Rosalind Dott`,
        prix: '899',
        location: 'Barcelona, Spain',
       date: '07:00 - 08:00 lundi, 15 mai 2023',
        nbplacsrestantes:'10',
        id:1
      }
    ];
    console.log( this.courgroupes )
  }
}
