import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user_id!: number;
  profileForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.user_id = +params['user_id']; // Get user_id from route parameters

      this.profileForm = this.formBuilder.group({
        user_id:['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dob: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        userType: ['', Validators.required]
        // Add more form controls here
      });

      // Fetch user data based on userId and populate the form
      this.fetchUserData();
    });
  }

  submitForm() {
    
    const formData = this.profileForm.value;
    console.log(formData)
    this.userService.updateUserProfile(this.user_id, formData). subscribe((res)=>{
      console.log("User updated successfully!", res);
      this.router.navigate(['view-profile', this.user_id]);
    }, 
    (err)=> {
      console.log(err);
    })
  }
  fetchUserData() {
    this.userService.getUserProfile(this.user_id).subscribe((userData) => {
      this.profileForm.patchValue(userData);
    });
  }
}

