import { Component, OnInit } from '@angular/core';
import { SEmployeeService } from '../employeeservice.service';
import { Employee } from '../employeeservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  user: Employee = new Employee(0,"",0);

  constructor(private employeeService: SEmployeeService) { }

  ngOnInit() {
  }
    CreateEmployee(): void {
      this.employeeService.CreateEmployee(this.user).subscribe( data => { alert("Employee created successfully.");});
      
         
         }

}
