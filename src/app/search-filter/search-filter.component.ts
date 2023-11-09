import { Component } from '@angular/core';
interface MyName {
  country: string;
}
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  items = [
    { id: 111, name: 'Dr.Raj kumar', dept: 'General Physician',feed:'★★★★ ' },
    { id: 112, name: 'Dr.Dinesh' , dept: 'General Surgeon',feed:'★★★★★ '},
    { id: 113, name: 'Dr.Manasa' , dept: 'MD Physician',feed:'★★★ '},
    { id: 114, name: 'Dr.Sinamika' , dept: 'Paediatrics & Neonatologist',feed:'★★' },
    { id: 115, name: 'Dr.Priya' , dept: 'Anaesthesia (Critical care)',feed:'★★★★★'},
    { id: 116, name: 'Dr.Maneesh Kumar' , dept: 'OBG Gynaecology',feed:'★★★ '},
    { id: 117, name: 'Dr.Kathikeya' , dept: 'Cardiologist',feed:'★★★★ '},
    { id: 118, name: 'Dr.Iqbal Basha' , dept: '	Nephrology',feed:'★★★ '},
    { id: 119, name: 'Dr.Shaik Althaf' , dept: 'Orthopedics (Sports Medicine)',feed:'★★★★'},
    { id: 120, name: 'Dr.Ruhani Sharma' , dept: '	Urology & Andrologist',feed:'★★★★★'},
    { id: 121, name: 'Dr. Kiran Petkar' , dept: '	ENT',feed:'★★★'},
    { id: 122, name: 'Dr. Sasi Kiran' , dept: 'Plastic surgery & Cosmetic surgeon',feed:'★★★★'},
    { id: 123, name: '	Dr Javeed Hussian' , dept: 'Surgical Gastro',feed:'★★★'},
    { id: 124, name: 'Dr Rahul Reddyh' , dept: 'Laproscopic Surgeon',feed:'★★'},
    { id: 125, name: 'Dr.Raveena' , dept: 'Neurosurgeon',feed:'★★★★'},
    { id: 126, name: 'Dr Chitra' , dept: 'General Surgeon',feed:'★★★★★'},
    // Add more items here...
  ];
  searchTerm: string = '';
  selectedCategory: string = '';
  
  get categories(): string[] {
    return [...new Set(this.items.map(item => item.dept))];
  }

  filterData() {
    this.filteredItems = this.items.filter(item =>
      (item.name.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (this.selectedCategory === '' || item.dept === this.selectedCategory)
    );
  }

  filteredItems = [...this.items]; // Initialize with all items
}
