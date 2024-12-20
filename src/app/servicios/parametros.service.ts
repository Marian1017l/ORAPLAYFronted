import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  urlBase :string = ConfiguracionRutasBackend.urlSeguridad;
  
  constructor(
    private http: HttpClient
  ) { }

  ObtenerIdUsuarioLS():string | null{
    let datosUsuario= localStorage.getItem("datos-usuario")
    if(datosUsuario){
      let usuario= JSON.parse(datosUsuario);
      console.log(usuario.idUsuario);
      
      return usuario.idUsuario;
    }
    return null;
  }
  obtenerDatosUsuario(usuarioid: string): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.urlBase}usuario/${usuarioid}`);
  }

  obtenerMetodosDePago(usuarioid: string): Observable<any> {
    return this.http.get(`${this.urlBase}metodo-pagos/usuario/${usuarioid}`);
  }

  AgregarMetodoDePago(usuarioId:string, tipoMetodo:string, numeroCuenta:number): Observable<any> {
    return this.http.post(`${this.urlBase}metodo-pagos`,{
      nombreMetodo: tipoMetodo, 
      numeroCuenta: numeroCuenta, 
      usuarioId: usuarioId
    });
  }

  obtenerPartidosPendientes(): Observable<any[]>{
    return this.http.get<any[]>(`${this.urlBase}partidos-pendientes`);
  }

  obtenerJugadoresPorPartido(idPartido: string): Observable<any[]>{ 
    return this.http.get<any[]>(`${this.urlBase}jugadores-por-partido/${idPartido}`);
  }
  
  obtenerPartidos(): Observable<any[]>{
    return this.http.get<any[]>(`${this.urlBase}partidos-en-curso`);
  }

  AgregarApuesta(usuarioid:string,goles:number, asistencias:number, monto:number, partidoId:string, jugadorId:string): Observable<any>{
    const apuesta = {
      usuarioId: usuarioid,
      goles: goles, 
      asistencias: asistencias, 
      cantidadApostada: monto, 
      partidoId: parseInt(partidoId), 
      jugadorId: parseInt(jugadorId), 
      posibleGanancia: 0
    };
    console.log(apuesta);
    return this.http.post(`${this.urlBase}apuesta-jugador`, apuesta);
  }

  obtenerEquiposPorPartido(idPartido: string): Observable<any[]>{
    return this.http.get<any[]>(`${this.urlBase}equipos-por-partido/${idPartido}`);
  }
}
