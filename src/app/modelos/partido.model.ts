import { ApuestaEventoModel } from "./apuesta-evento.mode";
import { ApuestaJugadorModel } from "./apuesta-jugador.model";
import { ApuestaMarcadorModel } from "./apuesta-marcador.model";
import { EstadisticaModel } from "./estadistica.model";

import { Evento } from "./evento.model";

export class PartidoModel{
    idPartido?: number;
    golesEquipoLocal?: number;
    golesEquipoVisitante?: number;
    fechaInicio?: string;
    fechaFin?: string;
    empate?: boolean;
    estado?: string;
    porcentajeGananciaEquipo1?: number;
    porcentajeGananciaEquipo2?: number;
    porcentajeEmpate?: number;
    idTorneo?: number;
    idEstadio?: number;
    equipoLocalId?: number;
    equipoVisitanteId?: number;
    eventos?: Evento[]; // Puedes definir esta clase aparte
    estadisticas?: EstadisticaModel[]; // Puedes definir esta clase aparte
    apuestasEvento?: ApuestaEventoModel[]; // Igual que los anteriores
    apuestasMarcador?: ApuestaMarcadorModel[];
    apuestasJugador?: ApuestaJugadorModel[];
}