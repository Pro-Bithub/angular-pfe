import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  displayedColumns = [ 'id', 'nom_etudiant', 'nom_tuteur', 'prix','date'];
  dataSource: MatTableDataSource<any>;
  selection: SelectionModel<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private readonly transactionsService: TransactionsService) {}

 
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this. gettAllTransactions()
  }

  gettAllTransactions(){

    this.transactionsService.gettAllTransactions().subscribe(
      response => {
     
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


}
