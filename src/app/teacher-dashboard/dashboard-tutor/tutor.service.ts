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
export class TutorService {
  private apiUrl: string = environment.apiUrl;
 
  constructor(private http: HttpClient) {}

  
  gettAllTutor(): Observable<any> {
    const url = `${this.apiUrl}/tuteurs/`; // Ajoutez le chemin d'API spécifique, par exemple '/signup'
    return this.http.get(url);
  }

  modifyTutor(userData: any): Observable<any> {
    const url = `${this.apiUrl}/tuteurs/modify`; // Ajoutez le chemin d'API spécifique, par exemple '/signup'
    return this.http.post(url, userData);
  }
  deleteTutor(id: string): Observable<any> {
    const url = `${this.apiUrl}/tuteurs/${id}`;
    return this.http.delete(url);
  }


}
