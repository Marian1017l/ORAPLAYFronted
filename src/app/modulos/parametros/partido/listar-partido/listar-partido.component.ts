import { Component } from '@angular/core';
import { ParametrosService } from '../../../../servicios/parametros.service';

@Component({
  selector: 'app-listar-partido',
  standalone: false,
  templateUrl: './listar-partido.component.html',
  styleUrl: './listar-partido.component.css'
})
export class ListarPartidoComponent {
  listaPartidos: any[] = []; 

  constructor(
    private parametroService: ParametrosService,
  ) { }

  ngOnInit() {
    this.CargarPartidos();
  }

  CargarPartidos(){
    this.parametroService.obtenerPartidos().subscribe({
      next: (data: any) => {
        console.log(data);
        // Filtramos los datos para obtener solo los atributos que necesitamos
        this.listaPartidos = data.map((partido:any) => ({
          nombreTorneo: partido.torneo.nombre,
          nombreEstadio: partido.estadio.nombre,
          fechaInicio: partido.fechaInicio,
          fechaFin: partido.fechaFin,
          equipoLocal: partido.equipoLocal.nombre,
          equipoVisitante: partido.equipoVisitante.nombre,
          golesLocal: partido.golesEquipoLocal,
          golesVisitante: partido.golesEquipoVisitante,
          empate: partido.empate,
          estadoPartido: partido.Estado,
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
