import { Component, OnInit } from '@angular/core';
import { PatientReportService } from '../patient-report.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent implements OnInit {
    reports: any[] = [];
    filteredReports: any[] = []; // This will hold the filtered reports
  searchTerm: any;
    constructor(private reportService: PatientReportService) { }
  
    ngOnInit(): void {
      this.reportService.getPatientReports().subscribe(data => {
        this.reports = data;
        this.filteredReports = this.reports;  
      });
    }
    filterReports() {
    if (!this.searchTerm) {
        this.filteredReports = this.reports; // If no search term is provided, show all reports
    } else {
        this.filteredReports = this.reports.filter(report =>
            (report.name && report.name.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
            (report.age && report.age.toString().includes(this.searchTerm)) ||
            (report.diagnosis && report.diagnosis.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
            (report.notes && report.notes.toLowerCase().includes(this.searchTerm.toLowerCase()))
        );
    }
}

  //   newReport = {
  //     name: '',
  //     age: '',
  //     diagnosis: '',
  //     notes: ''
  // };
//   addReport() {
//     this.reportService.createPatientReport(this.newReport).subscribe(data => {
//         this.reports.push(data); // assuming the server returns the created report
//         this.newReport = { name: '', age: '', diagnosis: '', notes: '' }; // reset the form data
//     });
// }
    addReport() {
      const newReport = {
        name: 'Sample Name', // Replace with dynamic data or form data
        age: 28,
        diagnosis: 'Sample Diagnosis',
        notes: 'Sample Notes'
      };
  
      this.reportService.createPatientReport(newReport).subscribe(data => {
        this.reports.push(data); // assuming the server returns the created report
      });
    }
    editMode(report: any, isEditing: boolean) {
      report.isEditing = isEditing; 
      // ife turning off edit mode, then save changes
      if (!isEditing) {
        this.saveChanges(report);
      }
    }
    
    saveChanges(report: any) {
      this.reportService.updatePatientReport(report.id, report).subscribe(data => {
        // Handle the successful update.
        // If the backend returns the updated report, update the local state.
        const index = this.reports.findIndex(r => r.id === report.id);
        this.reports[index] = data;
      });
    }
    
    
    removeReport(id: number) {
      this.reportService.deletePatientReport(id).subscribe(data => {
        // Remove the report from the list
        this.reports = this.reports.filter(report => report.id !== id);
        this.filteredReports = this.filteredReports.filter(report => report.id !== id);
      });
    }
  downloadPDF(report: any) {
    const documentDefinition = {
        content: [
            { 
                text: 'Patient Report', 
                style: 'header',
                margin: [0, 0, 0, 20]
            },
            {
                table: {
                    widths: ['*', '*', '*', '*'],
                    body: [
                        [{ text: 'ID', bold: true }, { text: 'Name', bold: true }, { text: 'Age', bold: true }, { text: 'Diagnosis', bold: true }],
                        [report.id, report.name, report.age, report.diagnosis],
                        [{ text: 'Notes', colSpan: 4, bold: true }, {}, {}, {}],
                        [{ text: report.notes, colSpan: 4, fillColor: '#f2f2f2' }, {}, {}, {}]
                    ]
                },
                layout: {
                    fillColor: function(rowIndex: number) {
                        return rowIndex % 2 === 0 ? '#FFFFFF' : '#f9f9f9';
                    }
                }
            }
        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true
            }
        }
    };

    pdfMake.createPdf(documentDefinition as any).download(`PatientReport_${report.id}.pdf`);
}

  
  }
  
  

