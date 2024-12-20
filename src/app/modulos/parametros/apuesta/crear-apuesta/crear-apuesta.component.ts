import { Component } from '@angular/core';
import { PartidoModel } from '../../../../modelos/partido.model';
import { ParametrosService } from '../../../../servicios/parametros.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-apuesta',
  standalone: false,
  templateUrl: './crear-apuesta.component.html',
  styleUrl: './crear-apuesta.component.css'
})
export class CrearApuestaComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private parametrosService: ParametrosService,
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.obtenerPartidosPendientes();
    this.mostrarJugadores();
    this.ConstruirFormularioApuestaJugador();
  }

  ConstruirFormularioApuestaJugador(){
      this.fGroup = this.fb.group({
        goles: ['',Validators.required],
        asistencias: ['',Validators.required],
        monto: ['',Validators.required],
        partidoId: ['',Validators.required],
        jugadorId: ['',Validators.required]
      });
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
    let select1 = document.getElementById('partidosPendientesEVENTO') as HTMLSelectElement;
    select1.innerHTML = ''; // Clear previous options
    let option1 = document.createElement('option');
    option1.value = '';
    option1.text = 'Seleccione un partido';
    select1.appendChild(option1);
    for(let partido of data){
      let option1 = document.createElement('option');
      option1.value = partido.idPartido?.toString() || '';
      option1.text = partido.equipoLocal.nombre + ' vs ' + partido.equipoVisitante.nombre + ' - ' + partido.fechaInicio;
      select1.appendChild(option1);

    let select2 = document.getElementById('partidosPendientesMarcador') as HTMLSelectElement;
    select2.innerHTML = ''; // Clear previous options
    let option2 = document.createElement('option');
    option2.value = '';
    option2.text = 'Seleccione un partido';
    select2.appendChild(option2);
    for(let partido of data){
      let option2 = document.createElement('option');
      option2.value = partido.idPartido?.toString() || '';
      option2.text = partido.equipoLocal.nombre + ' vs ' + partido.equipoVisitante.nombre + ' - ' + partido.fechaInicio;
      select2.appendChild(option2);
  }
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

  CrearApuesta(){
    if(!this.fGroup.valid){
      alert('Formulario no válido');
      return;
    }else{
      let goles = this.obtenerFormGroup['goles'].value;
      let asistencias = this.obtenerFormGroup['asistencias'].value;
      let monto = this.obtenerFormGroup['monto'].value;
      let partidoId = this.obtenerFormGroup['partidoId'].value;
      let jugadorId = this.obtenerFormGroup['jugadorId'].value;
      let idUsuario = this.parametrosService.ObtenerIdUsuarioLS();

      if(idUsuario){
        this.parametrosService.AgregarApuesta(idUsuario, goles, asistencias, monto, partidoId, jugadorId).subscribe({
          next: (data:any)=>{
            alert('Apuesta creada');
          },
          error: (error:any)=>{
            console.log(error);
            
          }
        });
      }
    }
  
  }

  mostrarEquipos(){
    let select = document.getElementById('partidosPendientesEVENTO') as HTMLSelectElement;
    let idPartido = select.value;
    this.parametrosService.obtenerEquiposPorPartido(idPartido).subscribe({
      next: (data) => {
        this.ponerEquipos(data);
      },
      error: (error) => {
        console.log('Error al obtener los jugadores del partido');
      }
    });
  }

  ponerEquipos(data: any[]) {
    let select = document.getElementById('equipos') as HTMLSelectElement;
    select.innerHTML = ''; // Clear previous options
    let option = document.createElement('option');
    option.value = '';
    option.text = 'Seleccione un equipo';
    select.appendChild(option);
    for (let partido of data) {
      let optionLocal = document.createElement('option');
      optionLocal.value = partido.equipoLocal.idEquipo?.toString() || '';
      optionLocal.text = partido.equipoLocal.nombre;
      select.appendChild(optionLocal);

      let optionVisitante = document.createElement('option');
      optionVisitante.value = partido.equipoVisitante.idEquipo?.toString() || '';
      optionVisitante.text = partido.equipoVisitante.nombre;
      select.appendChild(optionVisitante);
    }
  }

  get obtenerFormGroup(){
    return this.fGroup.controls;
  }
}
