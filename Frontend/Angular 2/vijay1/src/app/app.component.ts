import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Donors: Donor[] = [
    { Name: 'Vijay', BloodGroup: 'B Positive', ContactNo: 112233 }
  ];
  employee: Donor = { Name: '', BloodGroup: '', ContactNo: 0 };
  message: string = '';

  saveDonor() {
    this.Donors.push({ ...this.employee });
    this.message = `Record ${this.employee.Name} Saved`;
    this.clearDonor();
  }

  updateDonor() {
    const index = this.Donors.findIndex(e => e.Name === this.employee.Name);
    if (index !== -1) {
      this.Donors[index] = { ...this.employee };
      this.message = `Record ${this.employee.Name} Updated`;
    } else {
      this.message = `Record ${this.employee.Name} Not Found`;
    }
    this.clearDonor();
  }

  deleteDonor() {
    this.Donors= this.Donors.filter(e => e.Name !== this.employee.Name);
    this.message = `Record ${this.employee.Name} Deleted`;
    this.clearDonor();
  }

  clearDonor() {
    this.employee = { Name: '', BloodGroup: '', ContactNo: 0 };
  }
}

interface Donor {
  Name: string;
  BloodGroup: string;
  ContactNo: number;
}