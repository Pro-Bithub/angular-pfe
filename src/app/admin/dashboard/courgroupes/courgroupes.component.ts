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
  nbplactotale: string;
  langues: string[];
  description: string;
  niveaux: string;
  jour: string;
  time: string;
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
  selected = '-- None --';
  selectedLanguage: string = '-- None --';
  selectedniveaux: string = '-- None --';
  selectedjour: string = '-- None --';
  selectedheure: string = '-- None --';
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
       nbplactotale:'10',
       description:'Rosalind Dott',
       niveaux:'C1',
       jour:'Lundi',
       time:'07:00 - 08:00',
       langues:'Français, Allemand, Italien'.split(', '),
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
        nbplactotale:'10',
        description:'Rosalind Dott',
        niveaux:'C2',
        jour:'Lundi',
        time:'07:00 - 08:00',
        langues:'Français, Allemand, Italien'.split(', '),
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
        nbplactotale:'10',
        description:'Rosalind Dott',
        niveaux:'C2',
        jour:'Lundi',
        time:'07:00 - 08:00',
        langues:'Français, Allemand, Italien'.split(', '),
        id:1
      }
    ];
    console.log( this.courgroupes )
  }
}
