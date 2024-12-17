import { ApuestaEventoModel } from "./apuesta-evento.mode";

export class Evento {
    idEvento?: number;
    tipoEvento?: string;
    minuto?: number;
    partidoId?: number;
    apuestasEvento?: ApuestaEventoModel[]; 
    equipoId?: number;
}