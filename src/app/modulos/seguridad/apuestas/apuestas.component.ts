import { Component } from '@angular/core';
import { ParametrosService } from '../../../servicios/parametros.service';

@Component({
  selector: 'app-apuestas',
  standalone  : false,
  templateUrl: './apuestas.component.html',
  styleUrl: './apuestas.component.css'
})
export class ApuestasComponent {
  listaPartidos: any[] = []; 

  constructor(
    private parametroService: ParametrosService,
  ) { }

  ngOnInit() {
    this.CargarApuestas();
  }

  CargarApuestas(){
    this.parametroService.obtenerPartidos().subscribe({
      next: (data: any) => {
        console.log(data);
        // Filtramos los datos para obtener solo los atributos que necesitamos
        this.listaPartidos = data.map((partido:any) => ({
          nombreTorneo: partido.torneo.nombre,
          fechaInicio: partido.fechaInicio,
          equipoLocal: partido.equipoLocal.nombre,
          equipoVisitante: partido.equipoVisitante.nombre,
          gananciaEquipo1: partido.porcentajeGananciaEquipo1,
          gananciaEmpate: partido.porcentajeEmpate,
          gananciaEquipo2: partido.porcentajeGananciaEquipo2,
        }));

        // Verificar los datos filtrados
        console.log(this.listaPartidos);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
