import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.scss']
})
export class TutorProfileComponent  implements OnInit {
  hide2 = true;
  hide = true;
  tutor: any = {
    firstName: ' ',
    lastName: ' ',
    email: ' ',
    password: '',
    bio: '',
    type: '',
    languages: '',
    pricePerHour: '',
    disponibilite: '',
    // Autres propriétés du profil du tuteur
  };

  confirmPassword: string = '';

  saveProfile() {
    if (this.tutor.password !== this.confirmPassword) {
      // Afficher une erreur si les mots de passe ne correspondent pas
      console.log('Les mots de passe ne correspondent pas');
      return;
    }

    // Effectuer la logique de sauvegarde du profil du tuteur ici
    console.log('Profil du tuteur enregistré :', this.tutor);
  }
  constructor() {}
  ngOnInit() {

  }
}
