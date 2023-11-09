import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medication } from "./medication.model";
import { Prescription } from './prescription.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private apiUrl = 'http://localhost:28509/api/Medications';

  constructor(private http: HttpClient) {}

  getPrescriptions(): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(`${this.apiUrl}/prescriptions`);
  }

  addPrescription(data: Prescription): Observable<Prescription> {
    return this.http.post<Prescription>(`${this.apiUrl}/prescriptions`, data);
  }

  updatePrescription(data: Prescription): Observable<Prescription> {
    return this.http.put<Prescription>(`${this.apiUrl}/prescriptions/${data.prescriptionId}`, data);
  }

  deletePrescription(prescriptionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/prescriptions/${prescriptionId}`);
  }

  getMedications(): Observable<Medication[]> {
    return this.http.get<Medication[]>(`${this.apiUrl}/medications`);
  }

  addMedication(data: Medication): Observable<Medication> {
    return this.http.post<Medication>(`${this.apiUrl}/medications`, data);
  }

  updateMedication(data: Medication): Observable<Medication> {
    return this.http.put<Medication>(`${this.apiUrl}/medications/${data.medicationId}`, data);
  }

  deleteMedication(medicationId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/medications/${medicationId}`);
  }
}
