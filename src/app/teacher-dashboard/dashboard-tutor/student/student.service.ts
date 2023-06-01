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
export class StudentService {
  private apiUrl: string = environment.apiUrl;
 
  constructor(private http: HttpClient) {}

  gettAllStudent(): Observable<any> {
    const url = `${this.apiUrl}/etudiants/`; // Ajoutez le chemin d'API spécifique, par exemple '/signup'
    return this.http.get(url);
  }

  deleteStudent(id: string): Observable<any> {
    const url = `${this.apiUrl}/etudiants/${id}`;
    return this.http.delete(url);
  }



}
