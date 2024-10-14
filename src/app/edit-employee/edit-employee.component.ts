import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit {

  empGroup = new FormGroup({
    id : new FormControl("",Validators.required),
    empname : new FormControl("",Validators.required),
    deptid : new FormControl("",Validators.required),
    salary : new FormControl(""),
    joindate: new FormControl("",Validators.required)
  });

  constructor(private restSrvc:RestService,
    private activatedRoute:ActivatedRoute,
  private router:Router){}
  id:any;

  ngOnInit(): void {
    this.getDepartments();
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.restSrvc.getEmployee(this.id).subscribe(
      (data)=>{
        this.empGroup.patchValue(data);
      }
    )
  }
  departmentList:any;
  getDepartments(){
    return this.restSrvc.getDepartments().subscribe((data)=>{
      this.departmentList=data;
    })
  }
  updateEmployee(){
    var newemp=this.empGroup.value;
    this.restSrvc.updateEmployee(newemp).subscribe(
      (data)=>{
        alert("updated");
        this.router.navigate(['show']);
      }
    )
  }
}
