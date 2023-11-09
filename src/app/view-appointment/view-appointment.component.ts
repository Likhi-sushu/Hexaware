import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  
  successNotification() {
    Swal.fire('Your appointment booked Successfully','Thank you', 'success');
  }
  [x: string]: any;
  // ScheduleAppointment: any[] | undefined;
  formData: any;
  searchTerm = '';
  ScheduleAppointment: any[] = [
    // Sample data or keep it empty...
  ];

  get filteredAppointments() {
    if (!this.ScheduleAppointment) {
      return [];
    }

    return this.ScheduleAppointment.filter(appointment => 
      Object.values(appointment).some(val => {
        if (typeof val === 'string' || typeof val === 'number') {
          return val.toString().toLowerCase().includes(this.searchTerm.toLowerCase());
        }
        return false;
      })
    );
    }
  constructor(private http: HttpClient,private router: Router) { }
  confirmCancel(user_id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to cancel this appointment?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this['delete'](user_id);
      }
    });
  }
  delete(id: number) {
    this.http.delete(`http://localhost:28509/api/ScheduleAppointments/${id}`)
      .subscribe(
        () => {
          // Handle successful delete. E.g., remove from list, show success message, etc.
          Swal.fire('Deleted!', 'Your appointment has been cancelled.', 'success');
        },
        (error) => {
          // Handle error from backend or network issues
          Swal.fire('Error', 'There was an issue cancelling the appointment.', 'error');
        }
      );
  }
  confirmReschedule() {
    Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to reschedule?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, reschedule!',
        cancelButtonText: 'No, cancel'
  
      }).then((result) => {
        if (result.isConfirmed) {
            this.router.navigate(['/book']);
            Swal.fire(
                'Rescheduled!',
                'You have to intiate the rescheduled.',
            )
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelled',
                'Your appointment remains unchanged',
                'error'
            )
        }
    });
}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:28509/api/ScheduleAppointments').subscribe(ScheduleAppointments => {
      this.ScheduleAppointment = ScheduleAppointments  

      }) 
   }
  }
  
  // ... other component metadata ...
 
  