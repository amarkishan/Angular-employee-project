import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class Employee {
  constructor(public empId: number, public empName: string, public empSal: number) { }
}

@Injectable({
  providedIn: 'root'
})
export class SEmployeeService {
  employees: Employee[] = [
    new Employee(10, 'ram', 55000),
    new Employee(20, 'Ramesh', 65000),
    new Employee(30, 'Kumar', 95000)
  ];

  

  CreateEmployee(employee: Employee): Observable<Employee> {
    console.log(employee);
    this.employees.push(employee);
    return of(employee);
  }

  public deleteEmployee(employee: Employee): Observable<Employee> {
    const index = this.employees.findIndex(emp => emp.empId === employee.empId);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
    return of(employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    console.log(employee);
    const index = this.employees.findIndex(emp => emp.empId === employee.empId);
    if (index !== -1) {
      this.employees[index] = employee;
    }
    return of(employee);
  }

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }
}
