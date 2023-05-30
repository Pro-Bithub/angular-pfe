import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Injectable()
export class SignupService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  registerTutor(userData: any): Observable<any> {
    const url = `${this.apiUrl}/tuteurs/signup`; // Ajoutez le chemin d'API spécifique, par exemple '/signup'
    return this.http.post(url, userData);
  }
  registerEtudiant(userData: any): Observable<any> {
    const url = `${this.apiUrl}/etudiants/signup`; // Ajoutez le chemin d'API spécifique, par exemple '/signup'
    return this.http.post(url, userData);
  }
  
}
