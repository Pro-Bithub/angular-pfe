import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentService } from './appointment.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class Appointment implements OnInit {

  displayedColumns = [ 'id','nom_etudiant', 'date', 'duree', 'statut','action'];
  dataSource: MatTableDataSource<any>;
  selection: SelectionModel<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private snackBar: MatSnackBar,private readonly appointmentService: AppointmentService) {}

  ngOnInit() {
    this. getAppointmentsByTutorId()
  }

  getAppointmentsByTutorId(){
    const tuteurData = JSON.parse(localStorage.getItem('tuteurData'));
    if (!tuteurData || !tuteurData.id) {
      this.snackBar.open('Vous devez être connecté en tant qu\'tuteur ', 'Fermer', {
        duration: 3000,
        panelClass: 'error-snackbar'
      });
      return;
    }
    const idtutor=tuteurData.id
    this.appointmentService.getAppointmentsByTutorId(idtutor).subscribe(
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

  accepterRendezVous(id: string){
    this.appointmentService.accepterRendezVous(id).subscribe(
      response => {
     
        this.snackBar.open('Rendez-vous accepté avec succès', 'Fermer', {
          duration: 3000,
          panelClass: 'success-snackbar'
        });
        this. getAppointmentsByTutorId()
        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      error => {
        this.snackBar.open('Une erreur est survenue lors de l\'acceptation du rendez-vous', 'Fermer', {
          duration: 3000,
          panelClass: 'error-snackbar'
        });
      }
    );
    
  }
  refuserRendezVous(id: string){
    this.appointmentService.refuserRendezVous(id).subscribe(
      response => {
        this.snackBar.open('Rendez-vous refusé avec succès', 'Fermer', {
          duration: 3000,
          panelClass: 'success-snackbar'
        });
      
        this. getAppointmentsByTutorId()
        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      error => {
        this.snackBar.open('Une erreur est survenue lors du refus du rendez-vous', 'Fermer', {
          duration: 3000,
          panelClass: 'error-snackbar'
        });
      }
    );
  }

  getStatusClass(statut: string): string {
    switch (statut) {
      case 'En attente':
        return 'attente';
      case 'Confirmé':
        return 'confirme';
      case 'Annulé':
        return 'annule';
      default:
        return '';
    }
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  



}
