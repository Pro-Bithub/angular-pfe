import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CoursService } from './cours.service';

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
  constructor(private  coursService: CoursService) {}
  ngOnInit() {
    this.gettAllCour()
  
    console.log( this.courgroupes )
  }

  gettAllCour(){
    this.coursService.gettAllCourse().subscribe(
      response => {
        // Traitement de la réponse du service après l'inscription réussie
        this.courgroupes = response
console.log( this.courgroupes)
        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      error => {
        // Gérer les erreurs d'inscription
        console.error('Erreur ', error);
        // Afficher un message d'erreur ou prendre une autre action appropriée
      }
    );

  }

}
