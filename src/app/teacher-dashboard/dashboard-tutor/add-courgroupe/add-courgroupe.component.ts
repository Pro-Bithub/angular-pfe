import { Component, OnInit, ViewChild } from '@angular/core';





@Component({
  selector: 'app-add-courgroupe',
  templateUrl: './add-courgroupe.component.html',
  styleUrls: ['./add-courgroupe.component.scss']
})
export class AddCourgroupe implements OnInit {

  course: any = {
    title: ' ',
    availableSeats: ' ',
    language: ' ',
    level: '',
    duration: '',
    date: '',
    description: '',
    price: '',
    time: '',
    // Autres propriétés du profil du cour
  };
  constructor() {}

  ngOnInit() {
  
  }
  addCourse(){
    // Effectuer la logique de sauvegarde du profil du cour ici
console.log(this.course)
  }


  
 
}
