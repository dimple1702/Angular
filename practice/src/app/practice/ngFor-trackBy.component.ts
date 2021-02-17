import { Component } from '@angular/core';

@Component({
  selector: 'ngFor-trackBy',
  templateUrl: './ngFor-trackBy.component.html'
})
export class NgForTrackByComponent {
  employees: any[];
  constructor() {
    this.employees = [
      { code: 'emp101', firstName: 'Dimple', lastName:'Verma', gender: 'female', age: 20 },
      { code: 'emp102', firstName: 'Damon', lastName:'Salvatore', gender: 'male', age: 21 },
      { code: 'emp103', firstName: 'Caroline', lastName:'Forbes', gender: 'female', age: 19 },
      { code: 'emp104', firstName: 'Bonny', lastName:'Bennet', gender: 'female', age: 20 }
    ];
  }
  getEmployees():void{
    this.employees = [
      { code: 'emp101', firstName: 'Dimple', lastName:'Verma', gender: 'female', age: 20 },
      { code: 'emp102', firstName: 'Damon', lastName:'Salvatore', gender: 'male', age: 21 },
      { code: 'emp103', firstName: 'Caroline', lastName:'Forbes', gender: 'female', age: 19 },
      { code: 'emp104', firstName: 'Bonny', lastName:'Bennet', gender: 'female', age: 21 },
      { code: 'emp105', firstName: 'Stefan', lastName:'Salvatore', gender: 'male', age: 20 }
    ];
  }
  trackByEmpCode(index: number, employees: any):string{
    return employees.code;
  }
}
