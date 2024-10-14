import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  
constructor(private restSrvc:RestService, private router:Router){}

employeesList!:Employee[];

ngOnInit(){
  this.displayEmployees();
}

displayEmployees(){
  this.restSrvc.getEmployees().subscribe( 
    (data)=>{
      alert(JSON.stringify(data));
      this.employeesList=data as Employee[];
      //typecasting to Employee[] is optional.
    }
  );
}
deleteEmployee(id:number){
  this.restSrvc.deleteEmployee(id).subscribe((data)=>{
    let empObj = JSON.parse(JSON.stringify(data));
    alert("Employee with ID " + empObj.id + " deleted");
    //  this.router.navigateByUrl('show');
    //window.location.reload();
  })
}

editEmployee(id:number){
  this.router.navigate(['edit',id]);
}

addEmployee(){
  this.router.navigate(['add']);
}
}