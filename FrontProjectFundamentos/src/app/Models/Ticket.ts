import { Departamento } from "./Departamento";
import { Categoria } from "./Categoria";
import { Desarrollador } from "./Desarrollador";
import { EstadoTicket } from "./EstadoTicket";

export class Ticket {
    id?: number;
    nombre?: string;
    descripcionIncidente?: string;
    descripcionSolucion?: string;
    fechaInicial?: Date;
    fechaFinal?: Date;
    fechaCreacion?: Date;
    diasTranscurridos?: number;
    idDepartamento?: number;
    idCategoria?: number;
    idDesarrollador?: number;
    idEstadoTicket?: number;
    estadoTicket?:EstadoTicket
}