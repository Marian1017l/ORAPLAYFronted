import { ApuestaJugadorModel } from "./apuesta-jugador.model";
import { EquipoModel } from "./equipo.model";
import { EstadisticaModel } from "./estadistica.model";

export class JugadorModel {
    idJugador?: number;
    nombre?: string;
    apellido?: string;
    cantidadTitulos?: number;
    golesTotales?: number;
    nacionalidad?: string;
    contratos?: EquipoModel[];
    apuestasJugador?: ApuestaJugadorModel[];
    estadisticas?: EstadisticaModel[];
}