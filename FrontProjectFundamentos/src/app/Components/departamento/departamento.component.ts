import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/Models/Departamento';
import { DepartamentoService } from 'src/app/Services/Departamento/departamento.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  departamentos: Departamento[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'action'];
  constructor(private router: Router, private _departamentoService: DepartamentoService) { }

  ngOnInit(): void {
    this._departamentoService.getAll().subscribe((data: any) => {
      this.departamentos = data;
    })
  }

  create() {
    this.router.navigate(['departamento/crear-departamento']);
  }

  
  delete(departamento:Departamento) {  
    this._departamentoService.delete(departamento.id,departamento)
      .subscribe((res: any) => {     
        
        //this.toastr.success(res.mensaje, 'Tipo Usuario');
      });     
  }



}
