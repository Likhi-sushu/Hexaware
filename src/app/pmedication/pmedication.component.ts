import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-pmedication',
  templateUrl: './pmedication.component.html',
  styleUrls: ['./pmedication.component.css']
})
export class PmedicationComponent implements OnInit {

  prescriptions: any[] = [];
    constructor(private prescriptionService: PrescriptionService) {}
  
    ngOnInit(): void {
      this.prescriptionService.prescriptions$.subscribe(data => {
        this.prescriptions = data;
      });
  }

}