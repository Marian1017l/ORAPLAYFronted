import { Component } from '@angular/core';
import { ParametrosService } from '../../../../../servicios/parametros.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-metodo-de-pago',
  standalone: false,
  templateUrl: './crear-metodo-de-pago.component.html',
  styleUrl: './crear-metodo-de-pago.component.css'
})
export class CrearMetodoDePagoComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioParametros: ParametrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ConstruirFormulario(); 
  }

  ConstruirFormulario(){
      this.fGroup = this.fb.group({
        tipoM: ['', Validators.required], // Campo para Tipo de Método de Pago
        cuenta: ['', [Validators.required, Validators.minLength(10)]]
      });
    }

    AgregarMetodoPago(){
      if (this.fGroup.invalid) {
            alert('Formulario inválido');
            return;
          }
          let tipoMetodo = this.obtenerFormGroup['tipoM'].value;
          let numeroCuenta = this.obtenerFormGroup['cuenta'].value;
          console.log(tipoMetodo, numeroCuenta);
          
          let idUsuario= this.servicioParametros.ObtenerIdUsuarioLS();
          if(idUsuario){
            this.servicioParametros.AgregarMetodoDePago(idUsuario, tipoMetodo, numeroCuenta).subscribe({
              next: (data)=>{
                console.log(data);
                this.router.navigate(['/parametros/listar-metodos-pago']);
              },
              error: (error)=>{
                console.log(error);
              }
            })
          }
    }    

    get obtenerFormGroup(){
      return this.fGroup.controls;
    }
    
}
