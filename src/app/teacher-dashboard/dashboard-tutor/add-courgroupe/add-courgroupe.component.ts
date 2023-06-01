import { Component, OnInit, ViewChild } from "@angular/core";
import { CoursService } from "../courgroupes/cours.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-courgroupe",
  templateUrl: "./add-courgroupe.component.html",
  styleUrls: ["./add-courgroupe.component.scss"],
})
export class AddCourgroupe implements OnInit {
  course: any = {
    titre: " ",
    placesDisponibles: " ",
    langue: " ",
    niveau: "",
    duree: "",
    date: "",
    description: "",
    prix: "",
    horaire: "",
    idtutor: "",
    // Autres propriétés du profil du cour
  };
  constructor(private router: Router, private coursService: CoursService) {}

  ngOnInit() {}
  addCourse() {
    this.course.idtutor=this.getidtutor()
    this.coursService.addCourse(this.course).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(["/fr/dashboard-tutor/cours"]);
        // Effectuer d'autres actions telles que la redirection vers une page de connexion, afficher un message de succès, etc.
      },
      (error) => {
        // Gérer les erreurs d'inscription
        console.error("Erreur lors de l'inscription", error);
        // Afficher un message d'erreur ou prendre une autre action appropriée
      }
    );
  }

  getidtutor() {
    // Récupérer l'objet tuteurData de la localStorage
    const tuteurData = localStorage.getItem("tuteurData");

    // Vérifier si l'objet tuteurData existe
    if (tuteurData) {
      // Convertir la chaîne JSON en objet JavaScript
      const tuteurDataObj = JSON.parse(tuteurData);

      return tuteurDataObj.id;
    }
    return null;
  }
}
