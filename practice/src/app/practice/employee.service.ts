import {Injectable} from '@angular/core';
import { Employee } from './employee-interface';

@Injectable()
export class EmployeeService{
  getEmployees() : Employee[]{
      return[   
        { code: 'emp101', firstName: 'Dimple', lastName: 'Verma', gender: 'female', age: 20 },
        { code: 'emp102', firstName: 'Damon', lastName: 'Salvatore', gender: 'male', age: 21 },
        { code: 'emp103', firstName: 'Caroline', lastName: 'Forbes', gender: 'female', age: 19 },
        { code: 'emp104', firstName: 'Bonny', lastName: 'Bennet', gender: 'female', age: 21 },
        { code: 'emp105', firstName: 'Stefan', lastName: 'Salvatore', gender: 'male', age: 20 },
        { code: 'emp106', firstName: 'Klaus', lastName: 'Mikaelson', gender: 'male', age: 22 }
  ]
  }
}