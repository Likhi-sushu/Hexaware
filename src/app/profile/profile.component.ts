import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: 'Likhitha',
    email: 'likhi@gmail.com',
    phone:'7654321234',
    dob:'02-02-2001',
    gender:'Female',
    Consultantdoctor:'Dr.Chitra',
    lastvisit:'01-09-2023',
    age:'23',
    bloodgroup:'B +ve',
    //... add other user attributes here
  };

  isEditing = false;

  onSubmit() {
    // handle submit logic here
    console.log('Profile submitted:', this.user);
    this.isEditing = false;
  }
  onEdit() {
    this.isEditing = true;
  }
}
