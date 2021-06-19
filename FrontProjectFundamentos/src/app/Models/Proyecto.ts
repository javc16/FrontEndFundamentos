import { ProductOwner } from "./ProductOwner";
import { Desarrollador } from "./Desarrollador";

export class Proyecto {
  constructor(

    Id: number,
    NombreProyecto: string,
    DescripcionProyecto: string,
    EstadoDelProyecto: string,
    FechaInicio: Date,
    FechaFin: Date,
    FechaCreacion: Date,
    IdProductOwner: number,
    ProductOwner: ProductOwner,
    Estado: number,
    Desarrollador: Desarrollador[]
  ) { }
}
