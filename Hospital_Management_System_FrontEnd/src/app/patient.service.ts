import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  private getUrl = "http://localhost:7302/hospital/findAllPatients"
  private deleteUrl = "http://localhost:7302/hospital/remove"
  private postUrl = "http://localhost:7302/hospital/register"
  private getByIDUrl = "http://localhost:7302/hospital/getByID"
  private putUrl = "http://localhost:7302/hospital/update"

  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.getUrl}`)
  }

  delete(id: number): Observable<object> {
    return this.httpClient.delete(`${this.deleteUrl}/${id}`);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(`${this.postUrl}`, patient);
  }

  getPatientById(id:number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.getByIDUrl}/${id}`);
  }
  updatePatient(id: number, patient: Patient): Observable<object> {
    return this.httpClient.put<Patient>(`${this.putUrl}/${id}`, patient);
  }
}
