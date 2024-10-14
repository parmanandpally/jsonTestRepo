import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"add",component:AddEmployeeComponent},
  {path:"edit/:id",component:EditEmployeeComponent},
  {path:"show",component:EmployeesComponent},
  {path:"",redirectTo:"show",pathMatch:"full"},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }