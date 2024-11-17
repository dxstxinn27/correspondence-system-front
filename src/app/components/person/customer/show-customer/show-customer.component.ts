import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CustomerI } from '../../../../models/person';
import { CustomerService } from '../../../../services/persons/customer.service';

@Component({
  selector: 'app-show-customer',
  standalone: true,
  imports: [RouterModule, TableModule, ButtonModule, CardModule],
  templateUrl: './show-customer.component.html',
  styleUrl: './show-customer.component.css'
})
export class ShowCustomerComponent implements OnInit{
  public customers:CustomerI[] = []
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showCustomers()
  }

  showCustomers() {
    this.customerService.getAllCustomer()
      .subscribe({
        next: (data) => {
          this.customers = data
        }
      })
  }

  delete(id: number): void{
    this.router.navigateByUrl('/persons/customer/');
    this.customerService.deleteCustomer(id).subscribe(
      () => {
        this.showCustomers();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/persons/customer/');

      }
    );
  }

}
