import { Component, OnInit } from '@angular/core';
import { SEmployeeService } from '../employeeservice.service';
import { Employee } from '../employeeservice.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  user: Employee = new Employee(0,"",0);
  constructor(private empService: SEmployeeService) { }
  ngOnInit() {
  }
  updateEmployee(): void {
    console.log(this.user.empId);
    this.empService.updateEmployee(this.user)
        .subscribe( data => {
          alert("Employee updated successfully.");
        });

  };
}
