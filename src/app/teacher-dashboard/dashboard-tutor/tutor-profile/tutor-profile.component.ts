import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { TutorService } from '../tutor.service';



@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.scss']
})
export class TutorProfileComponent  implements OnInit {
  hide3 = true;
  hide2 = true;
  hide = true;

  tutor: any = {

    nom: ' ',
    prenom: ' ',
    email: ' ',
    ancienemail: ' ',
    motdepasse: '',
    bilographie: '',
    typedetuteur: '',
    languesparlees: '',
    pricePerHour: '',
    disponibilite: '',
    nouveaumotdepasse: '',
    // Autres propriétés du profil du tuteur
  };

  confirmPassword: string = '';
  constructor(private  tutorService: TutorService) {}

  saveProfile() {
    if ( this.tutor.nouveaumotdepasse!='' && this.tutor.nouveaumotdepasse !== this.confirmPassword) {
      // Afficher une erreur si les mots de passe ne correspondent pas
      console.log('Les mots de passe ne correspondent pas');
      return;
    }

    this.tutorService.modifyTutor(this.tutor).subscribe(
      response => {
        // Traitement de la réponse du service après l'inscription réussie
        console.log('Inscription réussie', response);

        const etudiantDataString = JSON.stringify(response);
        localStorage.setItem("tuteurData", etudiantDataString);
        localStorage.setItem('isLoggedin', 'true');
        this. RecupererobjettuteurData()

        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      error => {
        // Gérer les erreurs d'inscription
        console.error('Erreur lors de l\'inscription', error);
        // Afficher un message d'erreur ou prendre une autre action appropriée
      }
    );

    // Effectuer la logique de sauvegarde du profil du tuteur ici
    console.log('Profil du tuteur enregistré :', this.tutor);
  }

  ngOnInit() {
   this. RecupererobjettuteurData()

  }
  RecupererobjettuteurData(){
// Récupérer l'objet tuteurData de la localStorage
const tuteurData = localStorage.getItem('tuteurData');

// Vérifier si l'objet tuteurData existe
if (tuteurData) {
  // Convertir la chaîne JSON en objet JavaScript
  const tuteurDataObj = JSON.parse(tuteurData);

  // Assigner les valeurs de tuteurData à l'objet tutor
  this.tutor.nom = tuteurDataObj.nom;
  this.tutor.prenom = tuteurDataObj.prenom;
  this.tutor.email = tuteurDataObj.email;
  this.tutor.ancienemail = tuteurDataObj.email;
  this.tutor.motdepasse = tuteurDataObj.motdepasse;
  this.tutor.bilographie = tuteurDataObj.bilographie;
  this.tutor.typedetuteur = tuteurDataObj.typedetuteur;
  this.tutor.languesparlees = tuteurDataObj.languesparlees;
  this.tutor.pricePerHour = tuteurDataObj.pricePerHour;
  this.tutor.disponibilite = tuteurDataObj.disponibilite;
}
  }
}
