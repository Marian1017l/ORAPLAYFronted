import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ParametrosService } from '../../../../../servicios/parametros.service';
import { MetodoPagoModel } from '../../../../../modelos/metodo-pago.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-metodo-de-pago',
  standalone: false,
  templateUrl: './listar-metodo-de-pago.component.html',
  styleUrl: './listar-metodo-de-pago.component.css'
})
export class ListarMetodoDePagoComponent {
    metodosPago:any[] = [];

  constructor(
      private http: HttpClient,
      private servicioParametros: ParametrosService,
      private router: Router
    ) { }

    ngOnInit(): void {
      this.CargarMetodosDePago();
    }

    CargarMetodosDePago(){
      let idUsuario= this.servicioParametros.ObtenerIdUsuarioLS();
    if(idUsuario){
      this.servicioParametros.obtenerMetodosDePago(idUsuario).subscribe({
        next: (data)=>{
          console.log(data);
          this.metodosPago = data;
        },
        error: (error)=>{
          console.log(error);
        }
      })
    }
    }

    redirigirCrearMetodoPago(){
      this.router.navigate(['/parametros/crear-metodos-pago']);
    }
}
