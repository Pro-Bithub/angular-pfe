import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoursService, UserData } from './cours.service';



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
  constructor(private  coursService: CoursService) {}

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


  editCourse(id: string){

  }
  deleteCourse(id: string){

  }
  viewCourse(id: string){

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
