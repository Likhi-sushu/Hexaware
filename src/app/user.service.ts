import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  user!:User;
  private currentUserSubject: BehaviorSubject<User | null>;

  


  private apiURL = "http://localhost:28509/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  id: any;
  user_id: any;

  constructor(private httpClient: HttpClient) { this.currentUserSubject = new BehaviorSubject<User | null>(null);}
    
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/RegisterUsers/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  setCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
  }

  // A method to get the current user
  getCurrentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }
    

  create(user:User): Observable<any> {
  
    return this.httpClient.post(this.apiURL + '/RegisterUsers/', JSON.stringify(user), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    

  find(user_id:number): Observable<any> {
   
  
    return this.httpClient.get(this.apiURL + '/RegisterUsers/' + user_id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
   

  update(id: number, user: User): Observable<any> {
    return this.httpClient.put(`${this.apiURL}/RegisterUsers/${id}`, user, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  
  
  getUser_id(): Observable<number | null> {
    return this.id.asObservable();
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL+'/RegisterUsers/');
  }
  

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/RegisterUsers/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  checkDuplicateUser(email: string): Observable<any> {
    const url = `${this.apiURL}/RegisterUsers/checkDuplicateUser?email=${email}`;
    return this.httpClient.get(url);
  }

  getUserDetails(user_id: number): Observable<any> {
    const url = `${this.apiURL}/RegisterUsers/${user_id}`;
    return this.httpClient.get(url);
  }

  getUserProfile(user_id: number): Observable<User> {
    const url = `${this.apiURL}/RegisterUsers/${user_id}`; // Replace with your API endpoint
    // Make an HTTP GET request to fetch the user's profile
    return this.httpClient.get<User>(url);
  }
  
updateUserProfile(user_id:number, updatedUser: User): Observable<User> {
  const url = `${this.apiURL}/RegisterUsers/${user_id}`;
  // Log request details for debugging
  console.log('PUT Request URL:', url);
  console.log('Request Headers:', this.httpOptions.headers);
  console.log('Request Body:', updatedUser);

  // Make the HTTP PUT request
  return this.httpClient.put<User>(url, updatedUser, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
}
errorHandler(error: any) {
  // console.error('Service Error:', error);
  return throwError(error); // Re-throw the error for the component to handle
}
 
}