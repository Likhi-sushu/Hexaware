import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {
    ScheduleAppointment: any[] | undefined;
    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
      this.http.get<any[]>('http://localhost:28509/api/ScheduleAppointments').subscribe(ScheduleAppointment => {
        this.ScheduleAppointment = ScheduleAppointment  
    }) 

}
}
