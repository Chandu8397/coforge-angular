import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employeeId  :number=101;
  employeeName:string="Chandu";
  employeeAge :number=24;

  title="Employee Details - Data Binding using various Directives" //properties or Varibles

  isManager: boolean = true;

  //array
  skills:string[] = ['JavaScript','Angular','TypeScript'];

  //Enum
  Position: PositionType = PositionType.SeniorDeveloper;

 //object
  address:{ street: string, city:string, postalCode:number} = {
  street: 'main raod',
  city: 'Bangalore',
  postalCode: 560064
 };

 //Any Datatype
 extraInfo: any = 'Additional employee info';

 //Event Binding
 message: String = '';

 //Two-way Data Binding
 employeePosition: string = 'Software Engineer';

 //Event Binding Method
 hello():void{
  this.message = "Hello from event binding in Angular by -"+this.employeeName;
 }
 clear():void{
  this.message = '';
 }

 toggleManagerStatus():void{
  this.isManager = !this.isManager;
 }

 //Property Binding - One-way Binding
 username: String = 'James Gosling';
 info: string= "Property Binding - Oneway";

 updateUserName(){
  this.username = 'John Doe';
 }
 
 convertToDate(){
  const date = new Date();
  return date.toLocaleDateString();
 }

 add():number{
  return 10+200;
 }
}

///Enum for Position Type
enum PositionType{
  JuniorDeveloper,
  SeniorDeveloper,
  TeamLead

}
