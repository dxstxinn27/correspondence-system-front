import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { RouteI } from '../../../../models/logistic';
import { RouteService } from '../../../../services/logistics/route.service';
import { TransportI } from '../../../../models/logistic';
import { TransportService } from '../../../../services/logistics/transport.service';

@Component({
  selector: 'app-create-route',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-route.component.html',
  styleUrl: './create-route.component.css'
})
export class CreateRouteComponent implements OnInit {
  public form: FormGroup;   // Lista de sucursales
  transports: TransportI[] = [];       // Lista de rutas

  routeService = inject(RouteService);
  transportService = inject(TransportService); // Inyecta el servicio de sucursales
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) 
  { 
    this.form=this.formBuilder.group({
    origin: ['', [Validators.required]],
    destination: ['', [Validators.required]],
    stops: ['', [Validators.required]],
    transport: ['', [Validators.required]], 
  });
  }

  ngOnInit(): void {
    this.loadTransports();
    
  }

  loadTransports(): void {
    this.transportService.getAllTransport().subscribe(
      (transports: TransportI[]) => {
        this.transports = transports; // Asigna las sucursales obtenidas
      },
      err => {
        console.error('Error loading branches', err);
      }
    );
  }


  onSubmit(): void {
    const formValue: RouteI = this.form.value;
    console.log(formValue);
    this.routeService.createRoute(formValue).subscribe(
      () => {
        console.log(formValue)
        this.router.navigateByUrl('logistics/route/show');
      },
      err => {

        console.log(err);
        console.log('It was not created correctly.');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/logistics/route/show');
  }

  get origin() { return this.form.get('origin'); }
  get destination() { return this.form.get('destination'); }
  get stops() { return this.form.get('stops'); }
  get transport() { return this.form.get('transport'); }
}
