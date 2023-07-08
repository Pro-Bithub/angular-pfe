import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers/teachers.service';

interface Place {
  imgSrc: string;
  name: string;
  description: string;
  charge: string;
  location: string;
}

@Component({
  selector: 'app-myGroupCourses',
  templateUrl: './myGroupCourses.component.html',
  styleUrls: ['./myGroupCourses.component.scss']
})
export class MyGroupCourses implements OnInit {
  rendezVous: any[] = [];

  constructor(private teachersService: TeachersService) {}
  ngOnInit() {
    this.fetchRendezVous();
  }

  organizeMeeting(onerendezVous: any) {
    if (onerendezVous.statut === 'Confirmé') {
      // Ouvrir une nouvelle fenêtre avec l'URL de Google Meet
      window.open('https://meet.google.com/', '_blank'); // Remplacez cet URL par l'URL de Google Meet
  
      // Vous pouvez également passer des paramètres supplémentaires dans l'URL, par exemple l'ID du rendez-vous
      // window.open(`https://meet.google.com/?rendezVousId=${onerendezVous.id}`, '_blank');
    }
  }
  

  fetchRendezVous() {
    const etudiantData = JSON.parse(localStorage.getItem('etudiantData'));
    if (!etudiantData || !etudiantData.id) {
      return;
    }
    const etudiantId = etudiantData.id;

    this.teachersService.getRendezVous(etudiantId)
      .subscribe(
        response => {
          this.rendezVous = response;
          console.log('Rendez-vous retrieved:', this.rendezVous);
          // Traiter les rendez-vous récupérés comme nécessaire
        },
        error => {
          this. rendezVous = [];
          console.error('Failed to retrieve rendez-vous:', error);
          // Gérer l'erreur et afficher un message d'erreur
        }
      );
  }
}
