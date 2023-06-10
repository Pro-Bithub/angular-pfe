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
    // Effectuez les actions nécessaires pour organiser une réunion avec le rendez-vous spécifique
    // par exemple, rediriger l'utilisateur vers une page de planification de réunion ou afficher une boîte de dialogue, etc.
    // Vous pouvez accéder aux données du rendez-vous via la variable onerendezVous
  
    // Exemple de redirection vers une page de planification de réunion avec l'ID du rendez-vous
  /*   this.router.navigate(['/schedule-meeting'], { queryParams: { rendezVousId: onerendezVous.id } }); */
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
          console.error('Failed to retrieve rendez-vous:', error);
          // Gérer l'erreur et afficher un message d'erreur
        }
      );
  }
}
