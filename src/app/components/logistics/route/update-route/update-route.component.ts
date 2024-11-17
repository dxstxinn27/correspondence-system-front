import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RouteI, TransportI } from '../../../../models/logistic';
import { RouteService } from '../../../../services/logistics/route.service';
import { TransportService } from '../../../../services/logistics/transport.service';


@Component({
  selector: 'app-update-route',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './update-route.component.html',
  styleUrl: './update-route.component.css'
})
export class UpdateRouteComponent {
  public id: number =0;
  public form: FormGroup;
  transports: TransportI[] = [];

  routeService = inject(RouteService);
  transportService = inject(TransportService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,  
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
    
    this.id = this.route.snapshot.params['id'];
    this.getRoute(this.id);
    this.loadTransports();
  }

  getRoute(id: number) {
    this.routeService.getOneRoute(id).subscribe({
      next: (data) => {
        // Usamos patchValue para actualizar el formulario sin necesidad de coincidir exactamente con la estructura
        this.form.patchValue({
          origin: data.origin,
          destination: data.destination,
          stops: data.stops,
          transport: data.transports
        });
      },
      error: (err) => {
        console.error('Error fetching route data:', err);
      }
    });
  }
  

  loadTransports(): void {
    this.transportService.getAllTransport().subscribe(
      (transports: TransportI[]) => {
        this.transports = transports; // Asigna las sucursales obtenidas
      },
      err => {
        console.error('Error loading transports', err);
      }
    );
  }

  onSubmit(): void {
    const formValue: RouteI = this.form.value; // Los datos del formulario
    // El id ya lo tienes como propiedad en el componente, no hace falta sacarlo del formulario.
    formValue.id = this.id; // Asignamos el id del empleado directamente a los datos del formulario.
  
    // Llamamos al servicio para actualizar el empleado con el id y los valores del formulario
    this.routeService.updateRoute(this.id, formValue).subscribe(
      () => {
        // Redirigimos a la lista de empleados una vez actualizado
        this.router.navigateByUrl('logistics/route/show');
      },
      (err) => {
        console.log(err);
        console.log('No se ha actualizado correctamente');
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
