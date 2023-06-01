import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TutorService, UserData } from '../tutor.service';



@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.scss']
})
export class TutorComponent implements OnInit {

  displayedColumns = [ 'id', 'nom','email','pricePerHour','languesparlees','typedetuteur','bilographie','created_at','action'];
  dataSource: MatTableDataSource<any>;
  selection: SelectionModel<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private readonly tutorService: TutorService) {}

  ngOnInit() {
    //this.dataSource = new MatTableDataSource(this.tutorService.create100Users());

    this. gettAllTutor()
  }
  gettAllTutor(){
    this.tutorService.gettAllTutor().subscribe(
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
  deletetutor(id: string){
    this.tutorService.deleteTutor(id).subscribe(
      response => {
  
        this. gettAllTutor()

        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      error => {
        // Gérer les erreurs d'inscription
        console.error('Erreur ', error);
        // Afficher un message d'erreur ou prendre une autre action appropriée
      }
    );
  }

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  
}
