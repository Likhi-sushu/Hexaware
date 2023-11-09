import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendConfirmationEmail(email: string): Observable<any> {
    // Implement the logic to send an email
    // Example:
    return this.http.post('YOUR_BACKEND_API_ENDPOINT', { email });
  }
}
