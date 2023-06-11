import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppointmentService {

  private apiUrl: string = environment.apiUrl;
 
  constructor(private http: HttpClient) {}

  getAppointmentsByTutorId(tutorId: number): Observable<any> {
    const url = `${this.apiUrl}/tuteurs/appointments/${tutorId}`;
    return this.http.get<any>(url);
  }

  accepterRendezVous(id: string): Observable<any> {
    const url = `${this.apiUrl}/tuteurs/appointments-accept/${id}`;
     return this.http.get<any>(url);
  }

  refuserRendezVous(id: string): Observable<any> {
    const url = `${this.apiUrl}/tuteurs/appointments-refuse/${id}`;
     return this.http.get<any>(url);
  }

}
