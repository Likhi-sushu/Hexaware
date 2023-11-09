// Define this interface outside of your component class, preferably in a separate model file.
// interface Prescription {
//   patientName: string;
//   medName: string;
//   strength: string;
//   dosage: string;
//   frequency: string;
//   // ... other fields ...
//   prescriptions: Prescription[] ;
// }
import { Medication } from "./medication.model";

// Then, in your component class:
// prescriptions: Prescription[] = [];
export interface Prescription {
  prescriptionId: number;
  patientName: string;
  medications: Medication[];
}
