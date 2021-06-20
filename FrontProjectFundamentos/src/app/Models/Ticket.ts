import { Departamento } from "./Departamento";
import { Categoria } from "./Categoria";
import { Desarrollador } from "./Desarrollador";
import { EstadoTicket } from "./EstadoTicket";

export class Ticket {
    Id?: number;
    Nombre?: string;
    DescripcionIncidente?: string;
    DescripcionSolucion?: string;
    FechaInicio?: Date;
    FechaFin?: Date;
    FechaCreacion?: Date;
    DiasTranscurridos?: number;
    Departamento?: Departamento;
    Categoria?: Categoria;
    Desarrollador?: Desarrollador;
    EstadoTicket?: EstadoTicket
}