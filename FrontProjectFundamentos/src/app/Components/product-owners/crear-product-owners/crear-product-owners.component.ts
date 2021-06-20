import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductOwner } from 'src/app/Models/ProductOwner';
import { Proyecto } from 'src/app/Models/Proyecto';
import { ProductOwnerService } from 'src/app/Services/ProductOwner/product-owner.service';
import { ProyectoService } from 'src/app/Services/Proyecto/proyecto.service';

@Component({
  selector: 'app-crear-product-owners',
  templateUrl: './crear-product-owners.component.html',
  styleUrls: ['./crear-product-owners.component.css']
})
export class CrearProductOwnersComponent implements OnInit {
  productOwner: ProductOwner;
  proyectos: Proyecto[] = [];
  constructor
    (
      private _productOwnerService: ProductOwnerService,
      private _proyectoService: ProyectoService,
      private router: Router
    ) {
    this.productOwner = new ProductOwner();
  }

  ngOnInit(): void {
    this._proyectoService.getAll().subscribe(res => {
      this.proyectos = res;
    });
  }

  crearProductOwner() {
    if (this.productOwner) {
      this._productOwnerService.create(this.productOwner).subscribe(() => {
        this.router.navigate(['/product-owners'])
      });
    }
  }

  cancel() {
    this.router.navigate(['product-owners']);
  }

}
