import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class signupComponent implements OnInit {
  submitted = false;
  users:any;
  form!: FormGroup;
  duplicateUserError=false;
  constructor(
    public userService: UserService,
    private router: Router
  ) { }
  get f(){
    return this.form.controls;
  }
  OnSubmit(data: any) {
    console.warn(data);
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }

    this.userService.checkDuplicateUser(this.form.value.email).subscribe(
        (duplicateResponse: any) => {
            if (duplicateResponse.isDuplicate) {
                this.duplicateUserError = true;
                // Optionally, if you want to inform the user:
                console.log('Duplicate user detected!');
            } else {
                this.duplicateUserError = false; // Reset it to false, in case it was previously set to true
                this.userService.create(this.form.value).subscribe(
                    (res: any) => {
                        console.log('Account Signed successfully!');
                        this.router.navigateByUrl('login');
                    },
                    (err: any) => {
                        console.log('Error creating the user:', err);
                    }
                );
            }
        },
        (error: any) => {
            console.log('Error checking for duplicate user:', error);
        }
    );
}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      dob: new FormControl('', Validators.required),
      phonenumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]), // 10-digit phone number validation
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail\\.com$')]), // Gmail pattern validation
      password: new FormControl('', Validators.required),
      usertype: new FormControl('', Validators.required)
    });
    
  }   
}
