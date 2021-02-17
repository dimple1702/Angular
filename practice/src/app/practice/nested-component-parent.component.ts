import { Component, OnInit, Output } from '@angular/core';
import { Employee } from './employee-interface';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'nested-component-parent',
  templateUrl: './nested-component-parent.component.html'
})
export class NestedComponentParentComponent implements OnInit{
  employees: Employee[] = [];
  BtnSelected: string = 'all';

  constructor(private empService : EmployeeService) {
    
  }

  ngOnInit(){
    this.employees = this.empService.getEmployees();
  }

  getTotalEmpCount(): number {
    return this.employees.length;
  }

  getMaleCount(): number {
    return this.employees.filter(e => e.gender === 'Male').length;
  }

  getFemaleCount(): number {
    return this.employees.filter(e => e.gender === 'Female').length;
  }

  onBtnChange(BtnValue: string): void {
    this.BtnSelected = BtnValue.toLowerCase();
  }
}


/**
  = : Assign a value
  == : Compare two values
  === : Compare two values and their types
*/

