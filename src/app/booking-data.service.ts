import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingDataService {
  private formData: any = {};

  constructor() { }

  setData(data: any) {
    console.log('Setting data:', data);  // Log here
    this.formData = data;
    localStorage.setItem('bookingForm', JSON.stringify(data));
}

getData() {
  this.formData = JSON.parse(localStorage.getItem('bookingForm') || '{}');
  return this.formData;
}

 }

