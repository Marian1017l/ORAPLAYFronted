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
  
}
