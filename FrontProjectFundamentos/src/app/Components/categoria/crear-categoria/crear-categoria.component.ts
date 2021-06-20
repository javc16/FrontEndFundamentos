import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Models/Categoria';
import { CategoriaService } from 'src/app/Services/Categoria/categoria.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {
  categoria: Categoria;
  constructor(
    private _categoriaService: CategoriaService,
    private router: Router
  ) {
    this.categoria = new Categoria();
  }

  ngOnInit(): void {
  }

  crearCategoria() {
    if (this.categoria) {
      this._categoriaService.create(this.categoria).subscribe(() => {
        this.router.navigate(['/categoria']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/categoria']);
  }

}
