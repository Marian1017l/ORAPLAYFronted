import { Component } from '@angular/core';
import { PartidoModel } from '../../../../modelos/partido.model';
import { ParametrosService } from '../../../../servicios/parametros.service';

@Component({
  selector: 'app-crear-apuesta',
  standalone: false,
  templateUrl: './crear-apuesta.component.html',
  styleUrl: './crear-apuesta.component.css'
})
export class CrearApuestaComponent {

  constructor(
    private parametrosService: ParametrosService
  ) { }


  ngOnInit() {
    this.obtenerPartidosPendientes();
    this.mostrarJugadores();
  }

  obtenerPartidosPendientes(){
    this.parametrosService.obtenerPartidosPendientes().subscribe({
      next: (data)=>{
        this.ponerPartidosPendientes(data);
      },
      error: (error)=>{
        console.log('Error al obtener los partidos pendientes');
      }
    });
  }

  ponerPartidosPendientes(data: any[]){
    let select = document.getElementById('partidosPendientes') as HTMLSelectElement;
    select.innerHTML = ''; // Clear previous options
    let option = document.createElement('option');
    option.value = '';
    option.text = 'Seleccione un partido';
    select.appendChild(option);
    for(let partido of data){
      let option = document.createElement('option');
      option.value = partido.idPartido?.toString() || '';
      option.text = partido.equipoLocal.nombre + ' vs ' + partido.equipoVisitante.nombre + ' - ' + partido.fechaInicio;
      select.appendChild(option);
    }
  }

  mostrarJugadores() {
    let select = document.getElementById('partidosPendientes') as HTMLSelectElement;
    let idPartido = select.value;
    this.parametrosService.obtenerJugadoresPorPartido(idPartido).subscribe({
      next: (data) => {
        this.ponerJugadores(data);
      },
      error: (error) => {
        console.log('Error al obtener los jugadores del partido');
      }
    });
  }

  ponerJugadores(data: any[][]) {
    let select = document.getElementById('jugadores') as HTMLSelectElement;
    select.innerHTML = ''; // Clear previous options
    for (let array of data) {
      for (let jugador of array) {
        let option = document.createElement('option');
        option.value = jugador.idJugador?.toString() || '';
        option.text = jugador.nombre + ' ' + jugador.apellido;
        select.appendChild(option);
      }
    }
  }


}
