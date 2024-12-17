import { ApuestaEventoModel } from "./apuesta-evento.mode";
import { Evento } from "./evento.model";
import { JugadorModel } from "./jugador.model";
import { PartidoModel } from "./partido.model";
import { TorneoModel } from "./torneo.model";

export class EquipoModel {
    idEquipo?: number;
    nombre?: string;
    cantidadJugadores?: number;
    jugadores?: JugadorModel[];
    idTecnico?: number;
    torneos?: TorneoModel[];
    partidos?: PartidoModel[];
    apuestaEventosEquipo?: ApuestaEventoModel[];
    eventos?: Evento[];
}