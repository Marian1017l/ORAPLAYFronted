import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioModel } from '../modelos/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  urlBase :string = ConfiguracionRutasBackend.urlSeguridad;
  private sesionActivaSubject = new BehaviorSubject<boolean>(this.ObtenerDatosUsuarioLS() !== null);
  sesionActiva$ = this.sesionActivaSubject.asObservable();
  
  constructor(
    private http: HttpClient
  ){}

  /**
   * Identificar usuario
   * @param usuario 
   * @param clave 
   * @returns datos del usuario valido
   */
  identificarUsuario(usuario: string, clave: string): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${this.urlBase}verificar-usuario`, {
      email: usuario,  
      contraseña: clave
    });
  }
  
/**
   * hace una perticion al backend para registrar un usuario
   * @param datos los datos del usuario
   * @returns los datos del usuario
   */
  RegistrarUsuario(datos: any):Observable<any>{
    return this.http.post<UsuarioModel>(`${this.urlBase}usuario`, datos);
  }


  /**
   * Almacena los datos del usuario 
   * @param datos 
   * @returns datos del usuario
   */
  AlmacenarDatosUsuarioIdentificado(datos: UsuarioModel): boolean {
    let cadena = JSON.stringify(datos);
    let datosLS = localStorage.getItem('datos-usuario');
    if (datosLS) {
      localStorage.removeItem('datos-usuario');
    }
    localStorage.setItem('datos-usuario', cadena);  // Guardar datos
    this.ActualizarEstadoSesion();  // Actualiza el estado de la sesión después de almacenar
    return true;
  }

  // Obtener datos del usuario desde el localStorage
  ObtenerDatosUsuarioLS(): UsuarioModel | null {
    let datosLS = localStorage.getItem('datos-usuario');
    if (datosLS) {
      return JSON.parse(datosLS);  // Si hay datos, retorna el objeto del usuario
    } else {
      return null;  // Si no hay datos, retorna null
    }
  }

  // Remover datos del usuario
  RemoverDatosUsuarioValidado() {
    let datosUsuario = localStorage.getItem('datos-usuario');
    if (datosUsuario) {
      localStorage.removeItem('datos-usuario');  // Elimina los datos del usuario
    }
    this.ActualizarEstadoSesion();  // Actualiza el estado de la sesión después de remover
  }

  // Actualizar el estado de la sesión (activa o no)
  ActualizarEstadoSesion() {
    const usuario = this.ObtenerDatosUsuarioLS();  // Verifica si hay datos en el localStorage
    this.sesionActivaSubject.next(usuario !== null);  // Si los datos existen, marca la sesión como activa
  }

}
