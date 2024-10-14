import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './models/employee';

import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Department } from './models/department';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  employeesUrl = "http://localhost:5236/api/employeesdb"
  departmentsUrl = "http://localhost:3000/departments"
  
  constructor(private client:HttpClient) { }
  //below is a generic version of observable.  it is working properly.
  // getDepartments():Observable<Department[]> {
  //   return this.client.get<Department[]>(this.departmentsUrl);
  // }

  getDepartments():Observable<any> {
    return this.client.get<any>(this.departmentsUrl);
  }
employeeList!:Employee[];

  getEmployees() : Observable<any>{
    // return this.client.get<any>(this.employeesUrl);
    return this.client.get<any>(this.employeesUrl);
  }
  
  addEmployee(emp:any){
    return this.client.post(this.employeesUrl,emp);
  }
  deleteEmployee(id:number){
    return this.client.delete(this.employeesUrl + "/" + id);
  }
  getEmployee(id:number){
    return this.client.get(this.employeesUrl + "/" + id);
  }
  updateEmployee(emp:any){
    return this.client.put(this.employeesUrl+"/"+emp.id,emp);
  }
}
