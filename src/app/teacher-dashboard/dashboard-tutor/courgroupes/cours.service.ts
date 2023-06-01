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

  addCourse(userData: any): Observable<any> {
    const url = `${this.apiUrl}/cours/`; // Ajoutez le chemin d'API spécifique, par exemple '/signup'
    return this.http.post(url, userData);
  }
  gettAllCourse(idtutor:Number): Observable<any> {
    const url = `${this.apiUrl}/cours/byidtutor/`+idtutor; // Ajoutez le chemin d'API spécifique, par exemple '/signup'
    return this.http.get(url);
  }
  

}
