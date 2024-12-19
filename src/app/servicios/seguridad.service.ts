import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../modelos/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  urlBase :string = ConfiguracionRutasBackend.urlSeguridad;
  
  constructor(
    private http: HttpClient
  ){}

  /**
   * Identificar usuario
   * @param usuario 
   * @param clave 
   * @returns datos del usuario valido
   */
  identificarUsuario(usuario: string, clave: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.urlBase}usuarios/verificar`, {
      correo: usuario,  
      contraseña: clave
    });
  }
  

  /**
   * Almacena los datos del usuario 
   * @param datos 
   * @returns datos del usuario
   */
  AlmacenarDatosUsuarioIdentificado(datos:UsuarioModel): boolean{
    let cadena = JSON.stringify(datos);
    let datosLS= localStorage.getItem('datos-usuario');
    if(datosLS){
      localStorage.removeItem('datos-usuario');
    }else{
      localStorage.setItem('datos-usuario',cadena);
    }

    return true;
  }


/**
 * Busca los datos del usuario en el local storage
 * @returns datos del usuario
 */
  ObtenerDatosUsuarioLS():UsuarioModel | null{
    let datosLS= localStorage.getItem('datos-usuario');
    if(datosLS){
      let datos= JSON.parse(datosLS);
      return datos
    }else{
      return null
    }
  }
  RegistrarUsuario(datos: any):Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(`${this.urlBase}usuarios`, datos);
  }

  EnviarDatosSesion(datos:UsuarioModel):Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(`${this.urlBase}usuarios/verificar`, datos);
  }


}
