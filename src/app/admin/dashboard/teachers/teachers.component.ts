import { Component, OnInit , ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

interface Place {
  imgSrc: string;
  name: string;
  description: string;
  prix: string;
  location: string;
  date: string;
  nameuser: string;
  iduser: Number;
  nblecons: string;
  typetuteur: string;
  jour: string;
  time: string;
  langues: string[];
  categorie: string[];
}

interface Categorie {
  value: string;
  viewValue: string;
}

interface CategorieGroup {
  disabled?: boolean;
  name: string;
  categorie: Categorie[];
}

interface Time {
  value: string;
  viewValue: string;
}

interface TimeGroup {
  disabled?: boolean;
  name: string;
  time: Time[];
}






@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class Teachers implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  teachers: Array<Place> = [];
  selected = '';
  selectedLanguage: string = '';
  selectedCategorie:string[];
  selectedjour: string = '';
  selectedheure: string = '';
  selectedTypesdeprofesseurs: string = '';
  selectedHeuredelalecon:  string[];
  categorieGroup: CategorieGroup[] = [
    {
      name: 'Général',
      categorie: [
        {value: 'Pratique de la conversation', viewValue: 'Pratique de la conversation'},
        {value: 'Prononciation', viewValue: 'Prononciation'},
        {value: 'Grammaire', viewValue: 'Grammaire'},
        {value: 'Orthographe', viewValue: 'Orthographe'},
        {value: 'Lecture', viewValue: 'Lecture'},
        {value: 'Écoute', viewValue: 'Écoute'},

      ],
    },
    {
      name: 'Affaires',
      categorie: [
        {value: 'Réunion', viewValue: 'Réunion'},
        {value: 'Présentation', viewValue: 'Présentation'},
        {value: 'Entretien d embauche', viewValue: 'Entretien d embauche'},
        {value: 'Négociation', viewValue: 'Négociation'},
        {value: 'Étiquette des affaires', viewValue: 'Étiquette des affaires'},
     
      ],
    },
    {
      name: 'Préparation de test',
      categorie: [
        {value: 'IELTS', viewValue: 'IELTS'},
        {value: 'TOEFL', viewValue: 'TOEFL'},
        {value: 'TOEIC', viewValue: 'TOEIC'},
        {value: 'FCE', viewValue: 'FCE'},
        {value: 'BEC', viewValue: 'BEC'},
        {value: 'PET', viewValue: 'PET'},
        {value: 'CAE', viewValue: 'CAE'},
        {value: 'CPE', viewValue: 'CPE'},
        {value: 'KET', viewValue: 'KET'},
        {value: 'ILEC', viewValue: 'ILEC'},
        {value: 'Duolingo English Test', viewValue: 'Duolingo English Test'},
      ],
    },
    {
      name: 'Enfants',
      categorie: [
        {value: '3 à 6 ans', viewValue: '3 à 6 ans'},
        {value: '7 à 12 ans', viewValue: '7 à 12 ans'},
        {value: '13 à 15 ans', viewValue: '13 à 15 ans'},
        {value: '16 ans et plus', viewValue: '16 ans et plus'},
      ],
    },
  ];

  

  timeGroup: TimeGroup[] = [
    {
      name: 'Jours de la semaine',
      time: [
        {value: 'Lundi', viewValue: 'Lundi'},
        {value: 'Mardi', viewValue: 'Mardi'},
        {value: 'Mercredi', viewValue: 'Mercredi'},
        {value: 'Jeudi', viewValue: 'Jeudi'},
        {value: 'Vendredi', viewValue: 'Vendredi'},
        {value: 'Samedi', viewValue: 'Samedi'},
        {value: 'Dimanche', viewValue: 'Dimanche'},
      ],
    },
    {
      name: 'Heure de la journée',
      time: [
        {value: '0:00 - 4:00', viewValue: '0:00 - 4:00'},
        {value: '4:00 - 8:00', viewValue: '4:00 - 8:00'},
        {value: '8:00 - 12:00', viewValue: '8:00 - 12:00'},
        {value: '12:00 - 16:00', viewValue: '12:00 - 16:00'},
        {value: '16:00 - 20:00', viewValue: '16:00 - 20:00'},
        {value: '20:00 - 24:00', viewValue: '20:00 - 24:00'},
     
      ],
    },
  
  ];

  value = 'Clear me';
  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    this.teachers = [
      {
        imgSrc: 'assets/images/card-1.jpg',
        name: 'Cozy 5 Stars Apartment',
        description: `Turkish for Beginners (from absolute beginner to intermediate)\n\nThe lessons in this course aim to help you develop your basic understanding of Turkish. And each lecture is designed to improve your grammar, vocabulary and reading skills. And at the end of the sessions, you will be able to express yourself on one topic.\n\nOur lectures will be completely visual and conversational.\n\n- Visual lectures and presentations\n- Grammer instructions with easy methods\n- Listening to Turkish audios\n- Different games\n\nOne thing is obvious; Turkish is not difficult and much easier than more languages. Once you are able to grasp its structure, the rest will come easily.`,
        prix: '899',
        location: 'Barcelona, Spain',
       date: '07:00 - 08:00 lundi, 15 mai 2023',
       nameuser:'Annalena',
       iduser:1,
       nblecons:'365',
       typetuteur:'Tuteur communautaire',
       jour:'Lundi',
       time:'0:00 - 4:00',
       langues:'Anglais, Français, Italien'.split(', '),
       categorie:'Grammaire, Réunion, IELTS, 3 à 6 ans'.split(', ')
      },
      {
        imgSrc: 'assets/images/card-2.jpg',
        name: 'Cozy 5 Stars Apartment',
        description: `Turkish for Beginners (from absolute beginner to intermediate)\n\nThe lessons in this course aim to help you develop your basic understanding of Turkish. And each lecture is designed to improve your grammar, vocabulary and reading skills. And at the end of the sessions, you will be able to express yourself on one topic.\n\nOur lectures will be completely visual and conversational.\n\n- Visual lectures and presentations\n- Grammer instructions with easy methods\n- Listening to Turkish audios\n- Different games\n\nOne thing is obvious; Turkish is not difficult and much easier than more languages. Once you are able to grasp its structure, the rest will come easily.`,
        prix: '899',
        location: 'Barcelona, Spain',
       date: '07:00 - 08:00 lundi, 15 mai 2023',
        nameuser:'Rubí McMullen',
        iduser:1,
        nblecons:'365',
        typetuteur:'Tuteur communautaire',
        jour:'Lundi',
        time:'0:00 - 4:00',
        langues:'Anglais, Allemand, Italien'.split(', '),
        categorie:'Grammaire, Réunion, IELTS, 3 à 6 ans'.split(', ')
      },
      {
        imgSrc: 'assets/images/card-3.jpg',
        name: 'Cozy 5 Stars Apartment',
        description: `Turkish for Beginners (from absolute beginner to intermediate)\n\nThe lessons in this course aim to help you develop your basic understanding of Turkish. And each lecture is designed to improve your grammar, vocabulary and reading skills. And at the end of the sessions, you will be able to express yourself on one topic.\n\nOur lectures will be completely visual and conversational.\n\n- Visual lectures and presentations\n- Grammer instructions with easy methods\n- Listening to Turkish audios\n- Different games\n\nOne thing is obvious; Turkish is not difficult and much easier than more languages. Once you are able to grasp its structure, the rest will come easily.`,
        prix: '899',
        location: 'Barcelona, Spain',
       date: '07:00 - 08:00 lundi, 15 mai 2023',
        nameuser:'simon kenworthy',
        iduser:1,
        nblecons:'365',
        typetuteur:'Enseignant professionnel',
        jour:'Lundi',
        time:'0:00 - 4:00',
        langues:'Français, Allemand, Italien'.split(', '),
        categorie:'Grammaire, Réunion, IELTS, 3 à 6 ans'.split(', ')
      }
    ];
    console.log( this.teachers )
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content.html',
  styleUrls: ['./teachers.component.scss']
})
export class DialogContentExampleDialog {}