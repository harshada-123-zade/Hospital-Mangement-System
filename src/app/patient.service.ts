import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private HttpClient:HttpClient) {}
    
  private baseUrl="http://localhost:8081/api/v1/patients"

  getPatientList():Observable<Patient[]>{
    return this.HttpClient.get<Patient[]>(`${this.baseUrl}`)
  }

  delete(id:number):Observable<object>{
    return this.HttpClient.delete(`${this.baseUrl}/${id}`);
  }

  createPatient(patient:Patient):Observable<Patient>{
    return this.HttpClient.post<Patient>(`${this.baseUrl}`, patient);
  }

  getPatientById(id:number):Observable<Patient>{
    return this.HttpClient.get<Patient>(`${this.baseUrl}/${id}`);
  }

  updatePatient(id:number, patient:Patient):Observable<Object>{
    return this.HttpClient.put<Patient>(`${this.baseUrl}/${id}`,patient);
  }
}
