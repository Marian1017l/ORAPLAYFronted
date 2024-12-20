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
  fGroup1: FormGroup = new FormGroup({});
  fGroup2: FormGroup = new FormGroup({});

  constructor(
    private parametrosService: ParametrosService,
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.obtenerPartidosPendientes();
    this.mostrarJugadores();
    this.ConstruirFormularioApuestaJugador();
    this.ConstruirFormularioApuestaEvento();
    this.ConstruirFormularioApuestaMarcador();
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

    ConstruirFormularioApuestaEvento(){
      this.fGroup1 = this.fb.group({
        monto: ['', Validators.required],
        partidoIdEvento: ['', Validators.required],
        tipoEvento: ['', Validators.required],
        equipoIdEvento: ['', Validators.required]
      });
    }

    ConstruirFormularioApuestaMarcador(){
      this.fGroup2 = this.fb.group({
        golesLocalMarcador: ['', Validators.required],
        golesVisitanteMarcador: ['', Validators.required],
        cantidadApostadaMarcador: ['', Validators.required],
        partidoIdMarcador: ['', Validators.required]
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
      console.log(partido);
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

  CrearApuestaEvento(){
    if(!this.fGroup1.valid){
      alert('Formulario no válido');
      return;
    }else{
      let cantidadApostadaEvento = this.obtenerFormGroup1['monto'].value;
      let partidoIdEvento = this.obtenerFormGroup1['partidoIdEvento'].value;
      let equipoIdEvento = this.obtenerFormGroup1['equipoIdEvento'].value;
      let tipoEvento = this.obtenerFormGroup1['tipoEvento'].value;
      let idUsuario = this.parametrosService.ObtenerIdUsuarioLS();

      if(idUsuario){
        this.parametrosService.AgregarApuestaEvento(idUsuario, cantidadApostadaEvento, partidoIdEvento, equipoIdEvento, tipoEvento).subscribe({
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
  
  CrearApuestaMarcador(){
    if(!this.fGroup2.valid){
      alert('Formulario no válido');
      return;
    }else{
      let golesLocalMarcador = this.obtenerFormGroup2['golesLocalMarcador'].value;
      let golesVisitanteMarcador = this.obtenerFormGroup2['golesVisitanteMarcador'].value;
      let cantidadApostadaMarcador = this.obtenerFormGroup2['cantidadApostadaMarcador'].value;
      let partidoIdMarcador = this.obtenerFormGroup2['partidoIdMarcador'].value;
      let idUsuario = this.parametrosService.ObtenerIdUsuarioLS();

      if(idUsuario){
        this.parametrosService.AgregarApuestaMarcador(idUsuario, golesLocalMarcador, golesVisitanteMarcador, cantidadApostadaMarcador, partidoIdMarcador).subscribe({
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

  get obtenerFormGroup1(){   
    return this.fGroup1.controls;
  }

  get obtenerFormGroup2(){
    return this.fGroup2.controls;
  }
  
}
