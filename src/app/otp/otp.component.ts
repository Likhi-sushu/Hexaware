import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
// import { ClipboardService } from 'ngx-clipboard';
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent  implements OnInit {
  otp: string;
  enteredOtp: string;
  router: any;

  constructor() { }
  successNotification() {
    Swal.fire('Your Payment is Successful','Booking details sent via Email', 'success');
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

  ngOnInit(): void {
    this.generateOTP();
  }

  generateOTP() {
    // Generate a random 6-digit OTP
    this.otp = Math.floor(100000 + Math.random() * 900000).toString();
  }

  // copyToClipboard() {
  //   // Copy OTP to the clipboard
  //   this.clipboardService.copyFromContent(this.otp);
  //   alert('OTP copied to clipboard' );
  // }

  verifyOTP() {
    if (this.enteredOtp === this.otp) {
      // alert('OTP is correct');
      this.successNotification()
      setTimeout(() => {
        window.location.href = '/customerDashboard';
    }, 40000); 
      // window.location.href = '/customerDashboard';
    } else {
      // alert('OTP is incorrect');
      Swal.fire('OTP is incorrect')
    }
  }
}