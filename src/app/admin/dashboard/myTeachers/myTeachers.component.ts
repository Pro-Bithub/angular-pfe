import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers/teachers.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleDialog } from '../teachers/teachers.component';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Place {
  imgSrc: string;
  name: string;
  description: string;
  charge: string;
  location: string;
}

@Component({
  selector: 'app-myTeachers',
  templateUrl: './myTeachers.component.html',
  styleUrls: ['./myTeachers.component.scss']
})
export class MyTeachersComponent implements OnInit {
  favoriteTeachers: Array<any> = [];
  constructor(private snackBar: MatSnackBar,private  teachersService: TeachersService,public dialog: MatDialog) {}
  ngOnInit() {
 // Remplacez par la logique pour obtenir l'ID de l'étudiant
    this.loadFavoriteTeachers();
  }
  loadFavoriteTeachers() {
    const etudiantData = JSON.parse(localStorage.getItem('etudiantData'));
    if (!etudiantData || !etudiantData.id) {
      return;
    }
    const etudiantId = etudiantData.id; 

    this.teachersService.getFavoriteTeachers(etudiantId)
      .subscribe(
        (response) => {
          this.favoriteTeachers = response;
          // Traitez les tuteurs favoris de l'étudiant selon vos besoins
        },
        (error) => {
          console.error('Erreur lors du chargement des tuteurs favoris:', error);
          // Gérez le scénario d'erreur si nécessaire
        }
      );
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
