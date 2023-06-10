import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoursService, UserData } from './cours.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-courgroupes',
  templateUrl: './courgroupes.component.html',
  styleUrls: ['./courgroupes.component.scss']
})
export class Courgroupes implements OnInit {


  displayedColumns = [ 'id', 'titre', 'placesDisponibles', 'langue', 'niveau', 'duree', 'date', 'description', 'prix', 'horaire','action'];
  dataSource: MatTableDataSource<UserData>;
  selection: SelectionModel<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private  coursService: CoursService , public dialog: MatDialog) {}

  ngOnInit() {
    this. gettAllCours()
  }

  gettAllCours(){
    const idtutor=this.getidtutor()
    this.coursService.gettAllCourse(idtutor).subscribe(
      response => {
        // Traitement de la réponse du service après l'inscription réussie
        console.log('gettAllTutor  réussie', response);
        this.dataSource = new MatTableDataSource(response);
        this.selection = new SelectionModel<any>(true, []);

        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      error => {
        // Gérer les erreurs d'inscription
        console.error('Erreur ', error);
        // Afficher un message d'erreur ou prendre une autre action appropriée
      }
    );

  }


  editCourse(course: any){
 const dialogRef = this.dialog.open(EditCourseDialogComponent, {
      data: course, // Transmettez l'objet course à éditer à la boîte de dialogue
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Résultat de la boîte de dialogue :', result);
      // Effectuez des actions supplémentaires après la fermeture de la boîte de dialogue si nécessaire
    }); 
  }
  // Appel de la fonction deleteCourse
deleteCourse(id: number) {
  this.coursService.deleteCourse(id).subscribe(
    () => {
      this. gettAllCours()
      console.log('Cours supprimé avec succès');
      // Effectuer des actions supplémentaires après la suppression du cours si nécessaire
    },
    error => {
      console.error('Erreur lors de la suppression du cours :', error);
      // Gérer les erreurs de suppression du cours si nécessaire
    }
  );
}

  viewCourse(course: any){
    const dialogRef = this.dialog.open(detailsCourgroupesDialog, {
      data: course, // Transmettez l'objet course à la boîte de dialogue
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getidtutor() {
    // Récupérer l'objet tuteurData de la localStorage
    const tuteurData = localStorage.getItem("tuteurData");

    // Vérifier si l'objet tuteurData existe
    if (tuteurData) {
      // Convertir la chaîne JSON en objet JavaScript
      const tuteurDataObj = JSON.parse(tuteurData);

      return tuteurDataObj.id;
    }
    return null;
  }

}
@Component({
  selector: 'details-courgroupes-dialog',
  templateUrl: 'details-courgroupes.html',

})
export class detailsCourgroupesDialog {
  course: any; // Déclarez la propriété 'course' de type 'any'

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.course = data; // Affectez la valeur de 'data.course' à 'course'
    console.log("data")
    console.log(data)
  }
}

@Component({
  selector: 'app-edit-course-dialog',
  templateUrl: 'edit-course-dialog.component.html',
})
export class EditCourseDialogComponent {
  course: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private  coursService: CoursService ,
    public dialogRef: MatDialogRef<EditCourseDialogComponent>,
  ) {  this.course = data;}

  saveChanges() {
    console.log('Course updated successfully:');
    // Perform any necessary operations to save the changes to the course

    // For example, you can make an HTTP request to your API
    // to update the course data
    this.coursService.updateCourse(this.course).subscribe(
      (response) => {
        console.log('Course updated successfully:', response);
        this.dialogRef.close(true); // Close the dialog and pass a success indicator
      },
      (error) => {
        console.error('Failed to update course:', error);
        // Handle the error scenario if needed
      }
    );
  }

  closeDialog() {
    this.dialogRef.close(false); // Close the dialog and pass a failure indicator
  }
} 