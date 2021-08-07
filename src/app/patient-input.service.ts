import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = "https://djangoangulartest.herokuapp.com/patientinpunt/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PatientInputService {

  constructor(private http: HttpClient) { }

  patient(location: string, symptoms: string): Observable<any> {
    return this.http.post(AUTH_API , {
      symptoms,
      location,
    }, httpOptions);
  }
}
