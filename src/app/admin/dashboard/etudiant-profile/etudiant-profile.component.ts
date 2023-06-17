import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { TeachersService } from '../teachers/teachers.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-etudiant-profile',
  templateUrl: './etudiant-profile.component.html',
  styleUrls: ['./etudiant-profile.component.scss']
})
export class EtudiantProfileComponent  implements OnInit {
  hide3 = true;
  hide2 = true;
  hide = true;
  
  etudiantData: any = {
    id: "",
    prenom: "",
    nom: "",
    email: "",
    ancienemail: "",
    date_naissance: "",
    adresse: "",
    telephone:"",
    created_at: "",
    motdepasse: "",
  };
  
  confirmationmotdepasse: string = '';
  constructor(private snackBar: MatSnackBar, private tutorService: TeachersService) {}
  
  saveProfile() {
    if (this.etudiantData.motdepasse !=  "" && this.etudiantData.motdepasse !== this.confirmationmotdepasse) {
      // Afficher une erreur si les mots de passe ne correspondent pas
      this.snackBar.open('Les mots de passe ne correspondent pas', 'Fermer', {
        duration: 3000, // Durée de la notification en millisecondes (3 secondes dans cet exemple)
      });
      return;
    }
  
    this.tutorService.modifyEtudiant(this.etudiantData).subscribe(
      response => {
        // Traitement de la réponse du service après la modification réussie
        console.log('Modification réussie', response);
        this.snackBar.open('Modification réussie', 'Fermer', {
          duration: 3000, // Durée de la notification en millisecondes (3 secondes dans cet exemple)
        });
        const etudiantDataString = JSON.stringify(response);
        localStorage.setItem("etudiantData", etudiantDataString);
        localStorage.setItem('isLoggedin', 'true');
        this.recupererObjetEtudiantData();
  
        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      error => {
        // Gérer les erreurs de modification
        console.error('Erreur lors de la modification', error);
        this.snackBar.open('Erreur lors de la modification', 'Fermer', {
          duration: 3000, // Durée de la notification en millisecondes (3 secondes dans cet exemple)
        });
        // Afficher un message d'erreur ou prendre une autre action appropriée
      }
    );
  
    // Effectuer la logique de sauvegarde du profil de l'étudiant ici
    console.log('Profil de l\'étudiant enregistré :', this.etudiantData);
  }
  
  ngOnInit() {
    this.recupererObjetEtudiantData();
  }
  
  recupererObjetEtudiantData() {
    // Récupérer l'objet etudiantData de la localStorage
    const etudiantData = localStorage.getItem('etudiantData');
  
    // Vérifier si l'objet etudiantData existe
    if (etudiantData) {
      // Convertir la chaîne JSON en objet JavaScript
      const etudiantDataObj = JSON.parse(etudiantData);
  
      // Assigner les valeurs de etudiantData à l'objet etudiantData
      this.etudiantData.id = etudiantDataObj.id;
      this.etudiantData.prenom = etudiantDataObj.prenom;
      this.etudiantData.nom = etudiantDataObj.nom;
      this.etudiantData.email = etudiantDataObj.email;
      this.etudiantData.ancienemail = etudiantDataObj.email;
      this.etudiantData.date_naissance = etudiantDataObj.date_naissance;
      this.etudiantData.adresse = etudiantDataObj.adresse;
      this.etudiantData.telephone = etudiantDataObj.telephone;
      this.etudiantData.created_at = etudiantDataObj.created_at;
      this.etudiantData.motdepasse = etudiantDataObj.motdepasse;
    }
  }
}
