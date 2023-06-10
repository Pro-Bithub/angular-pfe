import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers/teachers.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleDialog } from '../teachers/teachers.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Place {
  imgSrc: string;
  name: string;
  description: string;
  charge: string;
  location: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  etudiantId: string;
  idcours: string;
  tutorId: string;
  prix: string;
  date: string;
  iscours: string;
  constructor(private router: Router,private snackBar: MatSnackBar,private route: ActivatedRoute,private teachersService: TeachersService) { }

  ngOnInit() {
    // Accessing route parameters using ActivatedRoute
    this.route.paramMap.subscribe(params => {
      this.etudiantId = params.get('etudiantId');
      this.idcours = params.get('idcours');
      this.tutorId = params.get('tutorId');
      this.prix = params.get('prix');
      this.date = params.get('date');
      this.iscours = params.get('iscours');
      
      console.log("def"+this.prix)
    });
  }

  saveTransaction() {
    const transactionData = {
      etudiantId: this.etudiantId,
      idcours: this.idcours,
      tutorId: this.tutorId,
      prix: this.prix,
      date: this.date,
      iscours: this.iscours,
    };
  
    this.teachersService.saveTransaction(transactionData)
    .subscribe(
      response => {
        console.log('Transaction saved:', response);
        // Display success notification
        this.snackBar.open('Transaction réalisée', 'Close', {
          duration: 3000, // Duration in milliseconds
        });
  
        // Redirect to "my-appointments" page
        this.router.navigate(['/my-appointments']);
      },
      error => {
        console.error('Failed to save transaction:', error);
        // Display error notification
        this.snackBar.open('Failed to save transaction.', 'Close', {
          duration: 3000, // Duration in milliseconds
        });
      }
    );
  
  }
}
