import { Component, Inject, OnInit , ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { TeachersService } from './teachers.service';
import { ConfirmationDialogComponent, ConfirmationDialogData } from './confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
  favorites: Array<any> = [];
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
  constructor(private snackBar: MatSnackBar,private  teachersService: TeachersService ,public dialog: MatDialog) {}

  markAsFavorite(idTutor: string) {

    const etudiantData = JSON.parse(localStorage.getItem('etudiantData'));
    if (!etudiantData || !etudiantData.id) {
      this.snackBar.open('Vous devez être connecté en tant qu\'étudiant pour marquer un tuteur comme favori', 'Fermer', {
        duration: 3000,
        panelClass: 'error-snackbar'
      });
      return;
    }
    const idEntityValue = etudiantData.id;
    const dialogData: ConfirmationDialogData = {
      title: 'Confirmation',
      message: 'Êtes-vous sûr de vouloir marquer ce tuteur comme favori ?',
      confirmText: 'Confirmer',
      cancelText: 'Annuler',
    };
  
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: dialogData,
    });
   


    dialogRef.afterClosed().subscribe((result) => {
      if (result) {

       
       this.teachersService.markAsFavorite(idTutor,idEntityValue) 
       .subscribe(
          (response) => {
            this.snackBar.open('Tuteur marqué comme favori', 'Fermer', {
              duration: 3000,
              panelClass: 'success-snackbar'
            });
            this. getFavoritesByEtudiantId()
            // Perform any additional actions if needed
          },
          (error) => {
            console.error('Erreur lors du marquage du tuteur comme favori:', error);
            this.snackBar.open('Une erreur s\'est produite lors du marquage du tuteur comme favori', 'Fermer', {
              duration: 3000,
              panelClass: 'error-snackbar'
            });
            // Handle the error scenario if needed
          }
        );
      }
    });
  }
  toggleFavoriteStatus(idTutor: string) {
    const isFavorite = this.isFavorite(idTutor);
    if (isFavorite) {
      this.unmarkAsFavorite(idTutor);
    } else {
      this.markAsFavorite(idTutor);
    }
  }

  
  unmarkAsFavorite(idTutor: string) {
    const etudiantData = JSON.parse(localStorage.getItem('etudiantData'));
    if (!etudiantData || !etudiantData.id) {
      this.snackBar.open('Vous devez être connecté en tant qu\'étudiant pour supprimer un tuteur des favoris', 'Fermer', {
        duration: 3000,
        panelClass: 'error-snackbar'
      });
      return;
    }
    const idEntityValue = etudiantData.id;
    const dialogData: ConfirmationDialogData = {
      title: 'Confirmation',
      message: 'Êtes-vous sûr de vouloir supprimer ce tuteur des favoris ?',
      confirmText: 'Confirmer',
      cancelText: 'Annuler',
    };
  
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: dialogData,
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.teachersService.unmarkAsFavorite(idTutor, idEntityValue)
          .subscribe(
            (response) => {
              this.snackBar.open('Tuteur supprimé des favoris', 'Fermer', {
                duration: 3000,
                panelClass: 'success-snackbar'
              });
              this. getFavoritesByEtudiantId()
              // Perform any additional actions if needed
            },
            (error) => {
              console.error('Erreur lors de la suppression du tuteur des favoris:', error);
              this.snackBar.open('Une erreur s\'est produite lors de la suppression du tuteur des favoris', 'Fermer', {
                duration: 3000,
                panelClass: 'error-snackbar'
              });
              // Handle the error scenario if needed
            }
          );
      }
    });
  }


  ngOnInit() {
    this.gettAllTutor()
    this. getFavoritesByEtudiantId()
    console.log( this.teachers )
  }

  getFavoritesByEtudiantId(){
    const etudiantData = JSON.parse(localStorage.getItem('etudiantData'));
    if (!etudiantData || !etudiantData.id) {
      return;
    }
    const idEntityValue = etudiantData.id;

    this.teachersService.getFavoritesByEtudiantId(idEntityValue).subscribe(
      (favorites: any) => {
        this.favorites = favorites;
        console.log( this.favorites )
      },
      (error) => {
        console.error('Failed to retrieve favorite tutors:', error);
        // Handle the error scenario if needed
      }
    );

  }

  isFavorite(tutorId: string): boolean {
    // Check if the tutorId exists in the list of favorite tutors
    return this.favorites.some(favorite => favorite.tutorId === tutorId);
  }
  gettAllTutor(){
    this.teachersService.gettAllTutor().subscribe(
      response => {
        // Traitement de la réponse du service après l'inscription réussie
        this.teachers = response
console.log( this.teachers)
        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      error => {
        // Gérer les erreurs d'inscription
        console.error('Erreur ', error);
        // Afficher un message d'erreur ou prendre une autre action appropriée
      }
    );

    /* this.teachers = [
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
    ]; */
  }
  openDialog(teacher:any ) {

    const etudiantData = JSON.parse(localStorage.getItem('etudiantData'));
    if (!etudiantData || !etudiantData.id) {
      this.snackBar.open('Vous devez être connecté en tant qu\'étudiant pour réserver une séance d\'essai', 'Fermer', {
        duration: 3000,
        panelClass: 'error-snackbar'
      });
      return;
    }
    const idEntityValue = etudiantData.id;
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        teacher: teacher,
        etudiantId: idEntityValue
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // Perform any actions based on the dialog result if needed
    });
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content.html',
  styleUrls: ['./teachers.component.scss']
})
export class DialogContentExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }
 /*  dayData = [
    { day: 'mar.', date: '30', timeslots: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30'] },
    { day: 'mer.', date: '31', timeslots: [] },
    { day: 'jeu.', date: '1', timeslots: [] },
    { day: 'ven.', date: '2', timeslots: [] },
    { day: 'sam.', date: '3', timeslots: [] },
    { day: 'dim.', date: '4', timeslots: [] },
    { day: 'lun.', date: '5', timeslots: [] }
  ]; */
  selectedTimeslots: string[] = [];

  currentDate: Date = new Date(); // Current date
  daysData: {
    day: string,
    date: string,
    month: string,
    nbmonth: string,
    year: number,
    timeslots: string[]
  }[] = []; // Array to hold day data
  dateRange: string  = this.updateDateRange(); // Variable to hold the date range // Variable to hold the date range

  goToNextWeek() {
    const nextWeek = new Date(this.currentDate);
    nextWeek.setDate(nextWeek.getDate() + 7); // Add 7 days to the current date
    this.currentDate = nextWeek;
    this.dateRange = this.updateDateRange();
  }
  
  goToPreviousWeek() {
    const previousWeek = new Date(this.currentDate);
    previousWeek.setDate(previousWeek.getDate() - 7); // Subtract 7 days from the current date
    this.currentDate = previousWeek;
    this.dateRange = this.updateDateRange();
  }
  handleTimeslotClick(day: any, timeslot: string) {
    console.log(this.selectedTimeslots)
    const timeslotId = this.getDateQaId(day, timeslot);
    const index = this.selectedTimeslots.indexOf(timeslotId);
    this.selectedTimeslots = [];
    if (index === -1) {
      // Timeslot not selected, add it to the selectedTimeslots array
      this.selectedTimeslots.push(timeslotId);
    } else {
      // Timeslot already selected, remove it from the selectedTimeslots array
      this.selectedTimeslots.splice(index, 1);
    }
 
  }
  

  updateDateRange(): string {
    // Calculate the start and end dates of the week
    const startOfWeek = new Date(this.currentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Set the date to the start of the week (Sunday)
  
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6); // Set the date to the end of the week (Saturday)
  
    const startDateString = startOfWeek.toLocaleDateString('fr', { day: 'numeric', month: 'short' });
    const endDateString = endOfWeek.toLocaleDateString('fr', { day: 'numeric', month: 'short' });
  
    const dateRange = `${startDateString}–${endDateString}, ${endOfWeek.getFullYear()}`;
  
    // Generate the daysData array for the days of the week
    this.daysData = [];
  
    const dayNames = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam']; // Adjust the order if needed

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + i);
      const day = dayNames[date.getDay()];
      const dateNumber = date.getDate().toString();
      const month = date.toLocaleDateString('fr', { month: 'short' });
   
      const nbmonth = (date.getMonth() + 1).toString().padStart(2, '0');

      const year = date.getFullYear();
    
      const timeslots = [];
      for (let hour = 10; hour <= 18; hour++) {
        timeslots.push(`${hour}:00`);
        timeslots.push(`${hour}:30`);
      }
    
      this.daysData.push({ day: day, date: dateNumber, month: month,nbmonth:nbmonth, year: year, timeslots: timeslots });
    }
  
    console.log(this.daysData)
    return dateRange;
  }
  getDateQaId(day: any, timeslot: string): string {
    const month = day.nbmonth;
    const year = day.year.toString();
    const formattedDate = day.date.padStart(2, '0');
    const formattedDay = day.day.substring(0, 3).toLowerCase();


    return `${year}-${month}-${formattedDate}T${timeslot}:00.000Z-${formattedDay}`;
  }
  
  
  
  confirmReservation() {
    // Ajoutez ici le code pour effectuer toute logique supplémentaire avant la redirection
  
    const etudiantId = this.data.etudiantId;
    const idcours =0
    const tutorId = this.data.teacher.id;
    let prix =0;
    if(this.data.teacher.pricePerHour!=null)
    prix =this.data.teacher.pricePerHour;
    
    const date = this.data.date;
    console.log(etudiantId)
    console.log(this.data)
    console.log(tutorId)
    console.log(prix)
    console.log(this.selectedTimeslots[0])
  
    this.router.navigate(['/payment', etudiantId, idcours, tutorId, prix, this.selectedTimeslots[0], false]);
  }

}