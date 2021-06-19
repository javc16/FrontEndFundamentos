import { Proyecto } from "./Proyecto";

export class Desarrollador {
    constructor(
        Id: number,
        Nombre: string,
        CodigoEmpleado: number,
        FechaCreacion: Date,
        IdProyecto: number,
        Proyecto: Proyecto
    ) { }
}