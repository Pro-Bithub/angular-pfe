import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Injectable()
export class TeachersService {
  private apiUrl: string = environment.apiUrl;
 
  constructor(private http: HttpClient) {}

  
  gettAllTutor(): Observable<any> {
    const url = `${this.apiUrl}/tuteurs/`; // Ajoutez le chemin d'API spécifique, par exemple '/signup'
    return this.http.get(url);
  }

  markAsFavorite(tutorId: string, etudiantId: string) {
    const url = `${this.apiUrl}/tuteurs/mark-as-favorite?tutorId=${tutorId}&etudiantId=${etudiantId}`;
    return this.http.get(url);
  }
  unmarkAsFavorite(tutorId: string, etudiantId: string): Observable<any> {
    const url = `${this.apiUrl}/tuteurs/unmark-as-favorite?tutorId=${tutorId}&etudiantId=${etudiantId}`;
    return this.http.delete(url);
  }

  
  getFavoritesByEtudiantId(etudiantId: string): Observable<any> {
    const url = `${this.apiUrl}/tuteurs/favorites/${etudiantId}`;
    return this.http.get<any>(url);
  }

  getFavoriteTeachers(etudiantId: string): Observable<any> {
    const url = `${this.apiUrl}/tuteurs/myfavorites/${etudiantId}`;
    return this.http.get(url);
  }

  saveTransaction(transactionData: any) {
    const url = `${this.apiUrl}/tuteurs/save-transaction`;
    return this.http.post(url, transactionData);
  }

  getRendezVous(etudiantId: string) {
    const url = `${this.apiUrl}/tuteurs/rendezvous/${etudiantId}`;
    return this.http.get<any[]>(url);
  }

}
