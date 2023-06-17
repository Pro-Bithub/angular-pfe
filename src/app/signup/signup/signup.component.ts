import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from './signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
   isprof:boolean=false
   nom: string;
   email: string;
   motdepasse: string;
   confirmPassword: string;
  constructor(  private snackBar: MatSnackBar,private router: Router,private route: ActivatedRoute, private  signupService: SignupService) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['isprof']=='tutor')
      this.isprof =true;
      else
      this.isprof =false;
      console.log(this.isprof ); // or use the parameter value as needed
    });
  }


  onRegister(): void {
    // Vérification du mot de passe
    if (this.motdepasse !== this.confirmPassword) {
      // Afficher une erreur avec MatSnackBar
      this.snackBar.open("Les mots de passe ne correspondent pas", 'Fermer', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      return;
    }
  
    const userData = {
      nom: this.nom,
      email: this.email,
      motdepasse: this.motdepasse
    };
  
    if (this.isprof) {
      this.registerTutor(userData);
    } else {
      this.registerEtudiant(userData);
    }
  
    // Ajoutez votre logique d'inscription ici
  }
  
  registerEtudiant(userData: any): void {
    this.signupService.registerEtudiant(userData).subscribe(
      response => {
        // Traitement de la réponse du service après l'inscription réussie
        console.log('Inscription réussie', response);
  
        const etudiantDataString = JSON.stringify(response);
        localStorage.setItem("etudiantData", etudiantDataString);
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard/teachers']);
  
        // Afficher une alerte avec MatSnackBar
        this.snackBar.open('Inscription réussie en tant qu\'étudiant', 'Fermer', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
  
        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      error => {
        // Gérer les erreurs d'inscription
        console.error('Erreur lors de l\'inscription', error);
  
        // Afficher un message d'erreur avec MatSnackBar
        this.snackBar.open('Erreur lors de l\'inscription', 'Fermer', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
  
        // Afficher un message d'erreur ou prendre une autre action appropriée
      }
    );
  }
  
  registerTutor(userData: any): void {
    this.signupService.registerTutor(userData).subscribe(
      response => {
        // Traitement de la réponse du service après l'inscription réussie
        console.log('Inscription réussie', response);
  
        const tuteurDataString = JSON.stringify(response);
        localStorage.setItem("tuteurData", tuteurDataString);
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/fr/dashboard-tutor/tutor-profile']);
  
        // Afficher une alerte avec MatSnackBar
        this.snackBar.open('Inscription réussie en tant que tuteur', 'Fermer', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
  
        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      error => {
        // Gérer les erreurs d'inscription
        console.error('Erreur lors de l\'inscription', error);
  
        // Afficher un message d'erreur avec MatSnackBar
        this.snackBar.open('Erreur lors de l\'inscription', 'Fermer', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
  
        // Afficher un message d'erreur ou prendre une autre action appropriée
      }
    );
  }

}
