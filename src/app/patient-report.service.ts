import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientReportService {

  private apiUrl = 'http://localhost:28509/api/patient_report'; // replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getPatientReports(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createPatientReport(report: any): Observable<any> {
    return this.http.post(this.apiUrl, report);
  }

  updatePatientReport(id: number, report: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, report);
  }

  deletePatientReport(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
