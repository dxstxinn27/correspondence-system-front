import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { EmployeeI } from '../../../../models/person';
import { EmployeeService } from '../../../../services/persons/employee.service';

@Component({
  selector: 'app-show-employee',
  standalone: true,
  imports: [RouterModule, TableModule, ButtonModule, CardModule],
  templateUrl: './show-employee.component.html',
  styleUrl: './show-employee.component.css'
})
export class ShowEmployeeComponent implements OnInit{
  public employees:EmployeeI[] = []

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showEmployees()
  }

  showEmployees() {
    this.employeeService.getAllEmployee()
      .subscribe({
        next: (data) => {
          this.employees = data
        }
      })
  }

  delete(id: number): void{
    this.router.navigateByUrl('/persons/employee/');
    this.employeeService.deleteEmployee(id).subscribe(
      () => {
        this.showEmployees();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/persons/employee/');

      }
    );
  }

}
