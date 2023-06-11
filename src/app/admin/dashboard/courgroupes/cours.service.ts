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
export class CoursService {
  private apiUrl: string = environment.apiUrl;
 
  constructor(private http: HttpClient) {}

  gettAllCourse(): Observable<any> {
    const url = `${this.apiUrl}/cours/`; // Ajoutez le chemin d'API spécifique, par exemple '/signup'
    return this.http.get(url);
  }
  getCoursDetails(idcours:string): Observable<any> {
    const url = `${this.apiUrl}/cours/${idcours}`; // Ajoutez le chemin d'API spécifique, par exemple '/signup'
    return this.http.get(url);
  }

  
}
