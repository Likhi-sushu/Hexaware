import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent  {
  searchTerm = '';
  patients = [
    { id: 11, name: 'Rajini', age: 40, diagnosis: 'Heart Surgery', lastVisitedDate: '01-09-2023', otherHealthInfo: 'Asthama,High bp,sugar', checkUpDate: '20-10-2023' },
   {id: 12, name: 'RangaReddy', age: 55, diagnosis: 'Mouth Cancer', lastVisitedDate: '05-09-2023', otherHealthInfo: 'Hypertension (High Blood Pressure)', checkUpDate: '25-10-2023' },
   { id: 13, name: 'Nandini', age: 35, diagnosis: 'AIDS', lastVisitedDate: '02-02-2022', otherHealthInfo: 'Tuberculosis', checkUpDate: '17-10-2023' },
   {id: 14, name: 'Manjula', age: 40, diagnosis: 'Eye Surgery', lastVisitedDate: '20-09-2023', otherHealthInfo: 'Migraine', checkUpDate: '15-10-2023' },
   { id: 15, name: 'Likhitha', age: 23, diagnosis: 'Malaria', lastVisitedDate: '05-09-2023', otherHealthInfo: 'Body Pains', checkUpDate: '12-10-2023' },

  ];

  get filteredPatients() {
    return this.patients.filter(patient => 
      Object.values(patient).some(val =>
        val.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

}

 

