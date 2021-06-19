import { Usuario } from "./Usuario";

export class Proyecto{
    constructor(
  
      Id: number,
      NombreProyecto: string,
      DescripcionProyecto : string,
      EstadoDelProyecto: string,
      FechaInicio: Date,
      FechaFin: Date,
      FechaCreacion:Date,
      IdProductOwner:number,
      ProductOwner:Usuario, 
      Estado:number,
    ){}
  }




    
        
        // public List<Desarrollador> DesarrolladoresResponsables { get; set; }
        // public List<Usuario> usuariosInvolucrados { get; set; }
        