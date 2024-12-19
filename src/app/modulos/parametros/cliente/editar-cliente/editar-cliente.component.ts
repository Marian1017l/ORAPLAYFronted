import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ParametrosService } from '../../../../servicios/parametros.service';

@Component({
  selector: 'app-editar-cliente',
  standalone  : false,
  templateUrl: './editar-cliente.component.html',
  styleUrl: './editar-cliente.component.css'
})
export class EditarClienteComponent {

  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  telefono: string = '';
  saldo: number = 0;

  constructor(
    private http: HttpClient,
    private servicioParametros: ParametrosService
  ) { }

  ngOnInit(): void {
    this.CargarInformacionApostador();
  }

  CargarInformacionApostador(){
    let idUsuario= this.servicioParametros.ObtenerIdUsuarioLS();
    if(idUsuario){
      this.servicioParametros.obtenerDatosUsuario(idUsuario).subscribe({
        next: (data)=>{
          console.log(data);
          this.nombre = data.nombre ?? '';
          this.apellido = data.apellido ?? '';
          this.correo = data.correo ?? '';
          this.telefono = data.telefono ?? '';
          this.saldo = data.saldo ?? 0;
        },
        error: (error)=>{
          console.log(error);
        }
      })
    }
  }

}
