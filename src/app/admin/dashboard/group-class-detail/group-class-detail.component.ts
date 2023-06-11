import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CoursService } from '../courgroupes/cours.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Place {
  imgSrc: string;
  name: string;
  nameuser: string;
  prix: string;
  location: string;
  date: string;
  nbplacsrestantes: string;
}

@Component({
  selector: 'app-group-class-detail',
  templateUrl: './group-class-detail.component.html',
  styleUrls: ['./group-class-detail.component.scss']
})
export class GroupClassDetailComponent implements OnInit {
  startTime: Date;
  endTime: Date;
  idcours: string;
  coursData: any; // Adjust the type according to your data structure

  constructor(private router: Router,private snackBar: MatSnackBar
   , private route: ActivatedRoute,
    private coursService: CoursService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idcours = params.idcours;
      this.getCoursDetails(this.idcours);
    });
  }
  getCoursDetails(idcours: string) {
    this.coursService.getCoursDetails(idcours).subscribe(
      (response) => {
        this.coursData = response;
        this.  calculateTime()
        // Handle the response data as needed
      },
      (error) => {
        console.log('Error retrieving cours details:', error);
        // Handle the error
      }
    );
  }

  calculateTime() {
    const horaireParts = this.coursData.horaire.split(':');
    const horaireHours = Number(horaireParts[0]);
    const horaireMinutes = Number(horaireParts[1]);
  
    if ( !this.coursData.duree) {
      this.startTime = null;
      this.endTime = null;
      return;
    }
  
    this.startTime = new Date();
    this.startTime.setHours(horaireHours);
    this.startTime.setMinutes(horaireMinutes);
  
    const endTime = new Date(this.startTime.getTime() + (this.coursData.duree * 60000));
    this.endTime = endTime;
  }
  
  getFormattedTimeString(date: Date): string {
    if (date) {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }
    return '';
  }
  redirectToPayment(coursData): void {
    const etudiantData = JSON.parse(localStorage.getItem('etudiantData'));
    if (!etudiantData || !etudiantData.id) {
      this.snackBar.open('Vous devez être connecté en tant qu\'étudiant pour réserver une séance d\'essai', 'Fermer', {
        duration: 3000,
        panelClass: 'error-snackbar'
      });
      return;
    }
    if (coursData.placesDisponibles === 0) {
      this.snackBar.open('Désolé, toutes les places sont déjà prises.', 'Fermer', {
        duration: 3000,
        panelClass: 'error-snackbar'
      });
      return;
    }
    const etudiantId = etudiantData.id; // Replace with the appropriate etudiant ID
    const idcours = coursData.id; // Replace with the appropriate ID for the cours
    const tutorId =  coursData.idtutor; // Replace with the appropriate tutor ID
    const prix = coursData.prix; // Replace with the appropriate price

    const dateTime = new Date(coursData.date);
const horaire =coursData. horaire;


const time = horaire.split(":").slice(0, 2).join(":");
const date = dateTime.toISOString().split("T")[0]+"T"+time;
console.log("Date:", date); // Output: Date: 2023-05-29
console.log("Time:", time); // Output: Time: 00:00



  
    this.router.navigate(['/payment', etudiantId, idcours, tutorId, prix, date, true]);
  }
  
  

}
