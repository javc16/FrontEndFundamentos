import { Proyecto } from "./Proyecto";

export class ProductOwner {
  id?: number;
  nombre?: string;
  codigoEmpleado?: number;
  departamento?: string;
  fechaCreacion?: Date;
  proyectos?: Proyecto[];
}


