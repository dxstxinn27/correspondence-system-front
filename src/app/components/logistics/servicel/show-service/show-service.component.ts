import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ServicelI } from '../../../../models/logistic';
import { ServicelService } from '../../../../services/logistics/servicel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-service',
  standalone: true,
  imports: [RouterModule, TableModule, ButtonModule, CardModule],
  templateUrl: './show-service.component.html',
  styleUrl: './show-service.component.css'
})
export class ShowServiceComponent implements OnInit {
  public servicess:ServicelI[] = []
  constructor(
    private servicelService: ServicelService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showServicel()
  }

  showServicel() {
    this.servicelService.getAllServicel()
      .subscribe({
        next: (data) => {
          this.servicess = data
          // console.log(this.clientes)
        }
      })
  }


  delete(id: number): void{
    this.router.navigateByUrl('logistics/servicel/show');
    this.servicelService.deleteServicel(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Cliente Eliminado', life:5000});
        this.showServicel();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('logistics/servicel/show');

      }
    );
  }

}
