import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Models/Proyecto';
import { ProductOwnerService } from 'src/app/Services/ProductOwner/product-owner.service';
import { ProyectoService } from 'src/app/Services/Proyecto/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  Proyectos: Proyecto[] = [];
  displayedColumns: string[] = ['id', 'nombreProyecto', 'descripcionProyecto', 'estadoDelProyecto', 'fechaInicio', 'fechaFin', 'productOwner', 'action'];

  constructor(private _proyectoService: ProyectoService, private _productOwnerService: ProductOwnerService, private router: Router) { }

  ngOnInit(): void {
    this._proyectoService.getAll().subscribe((data: any[]) => {
      this.Proyectos = data;
      console.log(this.Proyectos);
    });
  }

  create() {
    this.router.navigate(['proyecto/crear-proyecto']);
  }

  editProyecto(id: number) {
    this.router.navigate(['proyecto/editar-proyecto', id]);
  }


}


