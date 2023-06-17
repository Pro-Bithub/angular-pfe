import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isprof: boolean = false;
  email: string;
  motdepasse: string;
  selectedtype: string = "student";
  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {}
  onLogin() {
    const userData = {
      email: this.email,
      motdepasse: this.motdepasse,
    };
    if (this.verifyCredentials(userData)) {
      if (this.selectedtype == "tutor") {
        this.loginTutor(userData);
      } else {
        this.loginEtudiant(userData);
      }
    } else {
      // Afficher un message d'erreur avec MatSnackBar
      this.snackBar.open("Veuillez remplir tous les champs", "Fermer", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
  }
  verifyCredentials(userData: any): boolean {
    // Vérifier si les champs email et motdepasse sont remplis
    if (userData.email && userData.motdepasse) {
      return true;
    }
    return false;
  }
  loginEtudiant(userData: any): void {
    this.loginService.loginEtudiant(userData).subscribe(
      (response) => {
        // Traitement de la réponse du service après l'inscription réussie
        console.log("Inscription réussie", response);

        const etudiantDataString = JSON.stringify(response);
        localStorage.setItem("etudiantData", etudiantDataString);
        localStorage.setItem("isLoggedin", "true");
        this.router.navigate(["/dashboard/teachers"]);
        // Afficher une alerte avec MatSnackBar

        // Afficher une alerte avec MatSnackBar
        this.snackBar.open("Connecté en tant qu'étudiant", "Fermer", {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });

        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      (error) => {
        // Gérer les erreurs d'inscription
        console.error("Erreur lors de l'inscription", error);

        if (error.error.error === "Etudiant not found") {
          // Afficher un message d'erreur spécifique
          this.snackBar.open("Étudiant introuvable", "Fermer", {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top",
          });
        } else {
          // Afficher un message d'erreur générique
          this.snackBar.open("Erreur lors de la connexion", "Fermer", {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top",
          });
        }
      }
    );
  }
  loginTutor(userData: any): void {
    this.loginService.loginTutor(userData).subscribe(
      (response) => {
        // Traitement de la réponse du service après l'inscription réussie
        console.log("Inscription réussie", response);

        const tuteurDataString = JSON.stringify(response);
        localStorage.setItem("tuteurData", tuteurDataString);
        localStorage.setItem("isLoggedin", "true");
        this.router.navigate(["/fr/dashboard-tutor/tutor-profile"]);
        // Afficher une alerte avec MatSnackBar
        this.snackBar.open("Connecté en tant que tuteur", "Fermer", {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });

        console.log("Inscription réussiecc ", response);
        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      (error) => {
        if (error.error.error === "Etudiant not found") {
          // Afficher un message d'erreur spécifique
          this.snackBar.open("tuteur introuvable", "Fermer", {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top",
          });
        } else {
          // Afficher un message d'erreur générique
          this.snackBar.open("Erreur lors de la connexion", "Fermer", {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top",
          });
        }
      }
    );
  }
}
