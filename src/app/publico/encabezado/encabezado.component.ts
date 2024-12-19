import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { SeguridadService } from '../../servicios/seguridad.service';
import { UsuarioModel } from '../../modelos/usuario.model';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
  sesionActiva:boolean = false
  rutaActual:string = ''

  constructor(
    private servicioSeguridad: SeguridadService,
    private router: Router,
    
  ) {
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationStart) {
        this.rutaActual = event.url;
      }
    });
  }

  ngOnInit(): void {
    this.ValidarSesion();  // Verifica el estado de la sesión
    this.servicioSeguridad.sesionActiva$.subscribe((estado: boolean) => {
      this.sesionActiva = estado;  // Actualiza el estado de la sesión al recibir nuevos datos
    });
  }

  ValidarSesion() {
    this.servicioSeguridad.ActualizarEstadoSesion();  // Asegura que el estado de la sesión esté actualizado
  }

  CerrarSesion() {
    this.servicioSeguridad.RemoverDatosUsuarioValidado();  // Remueve los datos y actualiza el estado de la sesión
  }
}


