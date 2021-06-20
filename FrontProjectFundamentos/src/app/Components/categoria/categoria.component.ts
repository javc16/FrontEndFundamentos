import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Models/Categoria';
import { CategoriaService } from 'src/app/Services/Categoria/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'action'];
  constructor(private router: Router, private _categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this._categoriaService.getAll().subscribe((data: any) => {
      this.categorias = data;
    })
  }

  create() {
    this.router.navigate(['proyecto/crear-proyecto']);
  }

}
