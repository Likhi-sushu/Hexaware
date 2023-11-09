import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
private prescriptionsSubject = new BehaviorSubject<any[]>([]);
prescriptions$ = this.prescriptionsSubject.asObservable();

addPrescription(prescription: any) {
  const currentPrescriptions = this.prescriptionsSubject.getValue();
  this.prescriptionsSubject.next([...currentPrescriptions, prescription]);
}
}


