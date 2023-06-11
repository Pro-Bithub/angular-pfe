import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class TransactionsService {
 
  private apiUrl: string = environment.apiUrl;
 
  constructor(private http: HttpClient) {}
  
  gettAllTransactions(): Observable<any> {
    const url = `${this.apiUrl}/tuteurs/get/transactions`; // Ajoutez le chemin d'API spécifique, par exemple '/signup'
    return this.http.get(url);
  }
}
