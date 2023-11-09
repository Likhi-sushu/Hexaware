import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  prescriptionForm: FormGroup;
  medicationsList = ['Ibuprofen', 'Paracetamol', 'Amoxicillin','Diclofenac','Aspirin','Omeprazole'];
  strengthsList = ['100mg', '250mg', '500mg'];
  dosagesList = ['1x per day', '2x per day', '3x per day'];

  constructor(private fb: FormBuilder, private prescriptionService: PrescriptionService) {
    this.prescriptionForm = this.fb.group({
      patientName: ['', Validators.required],
      medications: this.fb.array([])
    });
  }

  ngOnInit(): void {
    // For initial form setup, add 2 medications by default
    this.addMedication();
    this.addMedication();
  }

  get medications(): FormArray {
    return this.prescriptionForm.get('medications') as FormArray;
  }

  addMedication(): void {
    const medicationGroup = this.fb.group({
      medName: ['', Validators.required],
      strength: ['', Validators.required],
      dosage: ['', Validators.required],
      frequency: ['', Validators.required],
    });

    this.medications.push(medicationGroup);
  }

  removeMedication(index: number): void {
    this.medications.removeAt(index);
  }

  submitPrescription(): void {
    this.prescriptionService.addPrescription(this.prescriptionForm.value);
    this.prescriptionForm.reset(); // Reset the form
    // After resetting, add 2 medications by default again
    this.addMedication();
    this.addMedication();
  }
}

