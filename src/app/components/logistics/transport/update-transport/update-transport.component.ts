import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { TransportI } from '../../../../models/logistic';
import { TransportService } from '../../../../services/logistics/transport.service';

@Component({
  selector: 'app-update-transport',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './update-transport.component.html',
  styleUrl: './update-transport.component.css'
})
export class UpdateTransportComponent {
  public id: number =0;
  public form: FormGroup;
  
  transportService = inject(TransportService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) 
  {
     this.form=this.formBuilder.group({
      id: [''],
      transportation: ['', [Validators.required]],
      capacity: ['', [Validators.required]],
  
    });
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // let idCliente = this.route.snapshot.paramMap.get("id");
    this.getTransport(this.id);

  }

  getTransport(id: number){
    this.transportService.getOneTransport(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data)
        // console.log(data.cliente)
      }
    })
  }


  onSubmit(): void {
    const formValue: TransportI = this.form.value;
    const id: number =  this.form.value.id
    this.transportService.updateTransport(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
    //     setTimeout(()=>{                  
    //       this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Actualizado', life:5000});

    //  }, 0);
        this.router.navigateByUrl('logistics/transport/show');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/logistics/transport/show');
  }

  get transportation() { return this.form.get('nombre'); }

  get capacity() { return this.form.get('capacity'); }

}
