import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../../../../services/persons/employee.service';
import { EmployeeI } from '../../../../models/person';
import { BranchI } from '../../../../models/branch';
import { RouteI } from '../../../../models/logistic';
import { BranchService } from '../../../../services/branches/branch.service';
import { RouteService } from '../../../../services/logistics/route.service';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{
  public id: number =0;
  public form: FormGroup;
  branches: BranchI[] = [];   // Lista de sucursales
  routes: RouteI[] = [];       // Lista de rutas

  employeeService = inject(EmployeeService);
  branchService = inject(BranchService); // Inyecta el servicio de sucursales
  routeService = inject(RouteService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,  
  ) 
  { 
    this.form=this.formBuilder.group({
    fullname: ['', [Validators.required]],
    position: ['', [Validators.required]],
    branch: ['', [Validators.required]],
    assignedRoute: [null], 
  });
  }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.getEmployee(this.id);
    this.loadBranches();
  }

  getEmployee(id: number) {
    this.employeeService.getOneEmployee(id).subscribe({
      next: (data) => {
        // Usamos patchValue para actualizar el formulario sin necesidad de coincidir exactamente con la estructura
        this.form.patchValue({
          fullname: data.fullname,
          position: data.position,
          branch: data.branch,
          assignedRoute: data.assignedRoute || null, // Aseguramos que sea null si no hay ruta asignada
        });
      },
      error: (err) => {
        console.error('Error fetching employee data:', err);
      }
    });
  }
  

  loadBranches(): void {
    this.branchService.getAllBranch().subscribe(
      (branches: BranchI[]) => {
        this.branches = branches; // Asigna las sucursales obtenidas
      },
      err => {
        console.error('Error loading branches', err);
      }
    );
  }

  onPositionChange(position: string) {
    if (position !== 'DISTRIBUTOR') {
      this.form.get('assignedRoute')?.setValue(null); // Limpia el valor si no es distribuidor
    }
  }

  onSubmit(): void {
    const formValue: EmployeeI = this.form.value; // Los datos del formulario
    // El id ya lo tienes como propiedad en el componente, no hace falta sacarlo del formulario.
    formValue.id = this.id; // Asignamos el id del empleado directamente a los datos del formulario.
  
    // Llamamos al servicio para actualizar el empleado con el id y los valores del formulario
    this.employeeService.updateEmployee(this.id, formValue).subscribe(
      () => {
        // Redirigimos a la lista de empleados una vez actualizado
        this.router.navigateByUrl('persons/employee/show');
      },
      (err) => {
        console.log(err);
        console.log('No se ha actualizado correctamente');
      }
    );
  }
  

  cancel() {
    this.router.navigateByUrl('/persons/employee/show');
  }

  get fullname() { return this.form.get('fullname'); }
  get position() { return this.form.get('position'); }
  get branch() { return this.form.get('branch'); }
  get assignedRoute() { return this.form.get('assignedRoute'); }

}