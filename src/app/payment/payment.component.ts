import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from '../data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  implements OnInit {
  successNotification() {
    Swal.fire('Your Payment is Successful','Thank you', 'success');
  }
  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
 
  registerForm:any = FormGroup;
  submitted = false;
  users:any;
  constructor( private formBuilder: FormBuilder,private router: Router,private data:DataService){
    // this.dataService.ScheduleAppointments().subscribe((data: Object)=>{
    //   this.ScheduleAppointments= data;
    // });
  }

  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit(data:any) {
    console.warn(data)
    // this.dataService.saveUser(data).subscribe((result: any)=>{
    //   console.warn(result)
    // })
    
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
    //True if all the fields are filled
    if(this.submitted)
    {
      // this.successNotification()
      window.location.href="/otp";
    }
   
  }
    ngOnInit() {
      //Add form validations
       this.registerForm = this.formBuilder.group({
        fname: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        age: ['', [Validators.required]],
      
      
      });
  }
}
