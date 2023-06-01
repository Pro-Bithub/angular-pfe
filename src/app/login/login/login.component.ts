import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isprof:boolean=false
  email: string;
  motdepasse: string;
  selectedtype: string="student"
  constructor(private router: Router , private  loginService: LoginService) {}

  ngOnInit() {}
  onLogin() {

    const userData = {
      email: this.email,
      motdepasse: this.motdepasse
    };

    if (this.selectedtype=="tutor") {
      this.loginTutor(userData)
    }else{
      this.loginEtudiant(userData)
    }

  }

  loginEtudiant(userData:any): void {
 

    this.loginService.loginEtudiant(userData).subscribe(
      response => {
        // Traitement de la réponse du service après l'inscription réussie
        console.log('Inscription réussie', response);

        const etudiantDataString = JSON.stringify(response);
        localStorage.setItem("etudiantData", etudiantDataString);
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard/teachers']);


        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      error => {
        // Gérer les erreurs d'inscription
        console.error('Erreur lors de l\'inscription', error);
        // Afficher un message d'erreur ou prendre une autre action appropriée
      }
    );
  }
  loginTutor(userData:any): void {
 

    this.loginService.loginTutor(userData).subscribe(
      response => {
        // Traitement de la réponse du service après l'inscription réussie
        console.log('Inscription réussie', response);

        const tuteurDataString = JSON.stringify(response);
        localStorage.setItem("tuteurData", tuteurDataString);
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/fr/dashboard-tutor/tutor-profile']);


        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      error => {
        // Gérer les erreurs d'inscription
        console.error('Erreur lors de l\'inscription', error);
        // Afficher un message d'erreur ou prendre une autre action appropriée
      }
    );
  }

}
