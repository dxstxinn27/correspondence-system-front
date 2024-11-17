import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouteI } from '../../../../models/logistic';
import { RouteService } from '../../../../services/logistics/route.service';

@Component({
  selector: 'app-show-route',
  standalone: true,
  imports: [RouterModule, TableModule, ButtonModule, CardModule],
  templateUrl: './show-route.component.html',
  styleUrl: './show-route.component.css'
})
export class ShowRouteComponent implements OnInit {
  public routes:RouteI[] = []

  constructor(
    private routeService: RouteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showRoutes()
  }

  showRoutes() {
    this.routeService.getAllRoute()
      .subscribe({
        next: (data) => {
          this.routes = data
        }
      })
  }

  delete(id: number): void{
    this.router.navigateByUrl('/logistics/route/');
    this.routeService.deleteRoute(id).subscribe(
      () => {
        this.showRoutes();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/logistics/route/');

      }
    );
  }

}
