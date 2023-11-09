import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private generatedOtp: string;

  generateOtp() {
    // Generate a random OTP (you can customize this as needed)
    this.generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    return this.generatedOtp;
  }

  validateOtp(enteredOtp: string) {
    return enteredOtp === this.generatedOtp;
  }
}
 