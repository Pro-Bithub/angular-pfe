import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
export interface UserData {
  email: string;
  motdepasse: string;

}

@Injectable()
export class LoginadminService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  loginTutor(userData: any): Observable<any> {
    const url = `${this.apiUrl}/tuteurs/login`; // Ajoutez le chemin d'API spécifique, par exemple '/login'
    return this.http.post(url, userData);
  }
  loginEtudiant(userData: any): Observable<any> {
    const url = `${this.apiUrl}/etudiants/login`; // Ajoutez le chemin d'API spécifique, par exemple '/login'
    return this.http.post(url, userData);
  }
  
}
