import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductOwner } from 'src/app/Models/ProductOwner';
import { ProductOwnerService } from 'src/app/Services/ProductOwner/product-owner.service';

@Component({
  selector: 'app-product-owners',
  templateUrl: './product-owners.component.html',
  styleUrls: ['./product-owners.component.css']
})
export class ProductOwnersComponent implements OnInit {
  ProductOwners: ProductOwner[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'codigoEmpleado', 'departamento', 'action'];
  constructor(private _productOwnerService: ProductOwnerService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {

  }

}
