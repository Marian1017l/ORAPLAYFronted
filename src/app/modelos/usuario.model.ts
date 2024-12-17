import { ApuestaEventoModel } from "./apuesta-evento.mode";
import { ApuestaJugadorModel } from "./apuesta-jugador.model";
import { ApuestaMarcadorModel } from "./apuesta-marcador.model";
import { MetodoPagoModel } from "./metodo-pago.model";

export class Usuario {
  idUsuario?: number;
  nombre?: string;
  apellido?: string;
  correo?: string;
  telefono?: string;
  password?: string;
  estado?: boolean;
  fechaRegistro?: string;
  rolId?: number;
  metodoPagos?: MetodoPagoModel[]; // Define una clase o interfaz para MetodoPago
  apuestaEventos?: ApuestaEventoModel[]; // Define una clase o interfaz para ApuestaEvento
  apuestasMarcador?: ApuestaMarcadorModel[]; // Define una clase o interfaz para ApuestaMarcador
  apuestaJugadores?: ApuestaJugadorModel[]; 
}