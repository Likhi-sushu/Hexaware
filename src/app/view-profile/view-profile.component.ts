import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
})
export class ViewProfileComponent implements OnInit {
  editing = false;
  user_id!: number;
  id!:number;
  form!: FormGroup;

  submitted = false;

  user: User = {
    user_id: 0,
    firstName: '',
    lastName: '',
    dob:'',
    phoneNumber: '',
    email: '',
    password: '',
    userType:'',
  };

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.user = {
    user_id: 0,
    firstName: '',
    lastName: '',
    dob:'',
    phoneNumber: '',
    email: '',
    password: '',
    userType:'',
    };
    // Get the userId from the route parameters
    this.route.paramMap.subscribe((params) => {
      const user_idParam = params.get('user_id');
      console.log(user_idParam);
      
      if (user_idParam !== null) {
        this.user_id = parseInt(user_idParam, 10);
       
        this.userService.getUserDetails(this.user_id).subscribe((user) => {
          this.user = user;
        });
      }
    });
  }
  // goToUserBookings() {
  //   if (this.user_id !== null) {
  //     this.router.navigate(['/userbookings', this.user_id]);
  //   }
}
