import { Component } from '@angular/core';
import { EmployeeHttpService } from '../../../../../http-services/employee-http.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  employes: any = [
    {
      name: 'Juan',
      email: 'juan@gmail.com'
      
     },
     {
      name: 'Maria',
      email: 'mariajuana@gmail.com'
     }  
  ];
  constructor(private employeeHttpService:EmployeeHttpService){
    this.findAll()
  }

  findAll(){
    return this.employeeHttpService.findAll().subscribe(response => {this.employes = response})
  }
}

