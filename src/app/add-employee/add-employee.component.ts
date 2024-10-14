import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { Department } from '../models/department';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
 departmentList!:Department[];

  constructor(private restSrvc:RestService, private router:Router){}
  ngOnInit(): void {
    this.getDepartments();
  }
  empGroup = new FormGroup({
    id : new FormControl("",Validators.required),
    empname : new FormControl("",Validators.required),
    deptid : new FormControl("",Validators.required),
    salary : new FormControl(""),
    joindate: new FormControl("",Validators.required)
  });
getDepartments(){
  return this.restSrvc.getDepartments().subscribe((data)=>{
    this.departmentList=data as Department[];
  })
}
addEmployee(){
  var newemp=this.empGroup.value;
  this.restSrvc.addEmployee(newemp).subscribe(
    (data)=>{
      alert(JSON.stringify(data));
      alert("success");
      this.router.navigate(['show'])
    }
  )
}
}
