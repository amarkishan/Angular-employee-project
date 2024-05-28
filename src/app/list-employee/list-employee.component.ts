import { Component, OnInit } from '@angular/core';
import { Employee } from '../employeeservice.service';
import { SEmployeeService } from '../employeeservice.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private empService: SEmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.empService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  deleteEmployee(employee: Employee): void {
    this.empService.deleteEmployee(employee).subscribe(data => {
      if (data) {
        this.employees = this.employees.filter(u => u !== employee);
      }
    });
  }
}
