import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

// Define the emailValidator function here
function emailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const email = control.value;
    if (email && !email.endsWith('@gmail.com')) {
      return { invalidEmail: true };
    }
    return null;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showAlert: boolean = false;
  emailRequiredError?: boolean;
  passwordRequiredError?: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, emailValidator()]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  Login(): void {
    // Check if the email and password fields have errors
    this.emailRequiredError = this.loginForm.get('email')?.hasError('required');
    this.passwordRequiredError = this.loginForm.get('password')?.hasError('required');

    // If there are errors in the form, do not proceed with login
    if (this.loginForm.invalid || this.emailRequiredError || this.passwordRequiredError) {
      return;
    }

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    const url = 'http://localhost:28509/api/RegisterUsers/' + email + '/' + password;

    this.http.get<any>(url).subscribe(
      (data) => {
        console.log(data);

        if (!data) {
          console.error('Data is undefined:', data);
          alert('An unexpected error occurred. Please try again later.');
          return;
        }
        if (data.Email === '') {
          alert('Enter the email!!');
        }

        if (data.Status === 'Error') {
          alert(data.Message);
        } else {
          const lowerCaseEmail = email.toLowerCase();

          if (data.value.userType === 'Admin') {
            window.location.href = '/adminDashboard';
          }
          else if (data.value.userType == 'Doctor'){
           window.location.href="/patient-dashboard";
          } else {
            window.location.href = '/customerDashboard';
          }
        }
      },
      (error: HttpErrorResponse) => {
        console.error('HTTP Error:', error);
        if (error.status === 404) {
          alert('Please enter the email and password!!.');
        } else {
          alert('invalid password!!');
        }
      }
    );
  }
}