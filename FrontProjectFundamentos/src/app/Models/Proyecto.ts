import { ProductOwner } from "./ProductOwner";
import { Desarrollador } from "./Desarrollador";

export class Proyecto {
  id?: number;
  nombreProyecto?: string;
  descripcionProyecto?: string;
  estadoDelProyecto?: string;
  fechaInicio?: Date;
  fechaFin?: Date;
  fechaCreacion?: Date;
  idProductOwner?: number;
  productOwner?: ProductOwner;
  estado?: number;
  desarrolladoresResponsables?: Desarrollador[];
}
