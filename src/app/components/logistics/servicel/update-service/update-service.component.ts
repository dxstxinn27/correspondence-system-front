import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { ServicelService } from '../../../../services/logistics/servicel.service';
import { ServicelI } from '../../../../models/logistic';

@Component({
  selector: 'app-update-service',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './update-service.component.html',
  styleUrl: './update-service.component.css'
})
export class UpdateServiceComponent {
  public id: number =0;
  public form: FormGroup;
  
  servicelService = inject(ServicelService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) 
  {
     this.form=this.formBuilder.group({
      id: [''],
      transportation: ['', [Validators.required]],
      cost: ['', [Validators.required]],
  
    });
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // let idCliente = this.route.snapshot.paramMap.get("id");
    this.getServicel(this.id);

  }

  getServicel(id: number){
    this.servicelService.getOneServicel(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data)
        // console.log(data.cliente)
      }
    })
  }


  onSubmit(): void {
    const formValue: ServicelI = this.form.value;
    const id: number =  this.form.value.id
    this.servicelService.updateServicel(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
    //     setTimeout(()=>{                  
    //       this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Actualizado', life:5000});

    //  }, 0);
        this.router.navigateByUrl('logistics/servicel/show');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/logistics/servicel/show');
  }

  get transportation() { return this.form.get('nombre'); }

  get cost() { return this.form.get('descripcion'); }

}
