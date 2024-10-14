export class Employee 
{
    constructor(id:number, empname:string,deptid:number,salary:number,joindate:Date){
        this.id=id;
        this.empname=empname;
        this.deptid=deptid;
        this.salary=salary;
        this.joinDate=joindate;
    }
    
    id:number;
    empname:string;
    deptid:number;
    salary:number;
    joinDate:Date;
}