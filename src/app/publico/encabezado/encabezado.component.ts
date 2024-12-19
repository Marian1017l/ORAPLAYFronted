import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { SeguridadService } from '../../servicios/seguridad.service';

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
    this.ValidarSesion();
  }

  ValidarSesion(){
    if(this.servicioSeguridad.ObtenerDatosUsuarioLS()!==null){
      this.sesionActiva = true;
      console.log('Sesion activa');
      
    }else{
      this.sesionActiva = false;
      console.log('Sesion activa');
    }
  }

    CerrarSesionUsuario(){
      this.servicioSeguridad.CerrarSesion();
      this.sesionActiva = false;
    }
}


