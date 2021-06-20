import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Desarrollador } from 'src/app/Models/Desarrollador';
import { ProductOwner } from 'src/app/Models/ProductOwner';
import { Proyecto } from 'src/app/Models/Proyecto';
import { DesarrolladorService } from 'src/app/Services/Desarrollador/desarrollador.service';
import { ProductOwnerService } from 'src/app/Services/ProductOwner/product-owner.service';
import { ProyectoService } from 'src/app/Services/Proyecto/proyecto.service';

@Component({
  selector: 'app-crear-proyectos',
  templateUrl: './crear-proyectos.component.html',
  styleUrls: ['./crear-proyectos.component.css']
})
export class CrearProyectosComponent implements OnInit {
  proyecto: Proyecto;
  productOwners: ProductOwner[] = [];
  desarrolladores: Desarrollador[] = [];
  selectedProductOwner: ProductOwner;
  constructor
    (
      private _proyectoService: ProyectoService,
      private _productOwnerService: ProductOwnerService,
      private _desarrolladorService: DesarrolladorService,
      private router: Router
    ) {
    this.proyecto = new Proyecto();
    this.selectedProductOwner = new ProductOwner();
    this.proyecto.ProductOwner = new ProductOwner();

  }

  ngOnInit(): void {
    this._productOwnerService.getAll().subscribe(res => {
      this.productOwners = res;
      console.log(this.productOwners);
    });

    this._desarrolladorService.getAll().subscribe(res => {
      this.desarrolladores = res;
    })
  }

  crearProyecto() {
    this._productOwnerService.getById(this.proyecto.IdProductOwner).subscribe((data: any) => {

      if (data.mensaje == null) {

        this.proyecto.ProductOwner = data.datos;
        this.selectedProductOwner = data.datos;
        debugger;
        if (this.proyecto) {
          this._proyectoService.create(this.proyecto).subscribe(() => {
            this.router.navigate(['/proyecto']);
          });
        }
      }
    });

  }

  cancel() {
    this.router.navigate(['proyecto']);
  }

}
