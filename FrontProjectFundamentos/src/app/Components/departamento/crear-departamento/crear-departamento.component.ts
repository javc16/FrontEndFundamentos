import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/Models/Departamento';
import { DepartamentoService } from 'src/app/Services/Departamento/departamento.service';

@Component({
  selector: 'app-crear-departamento',
  templateUrl: './crear-departamento.component.html',
  styleUrls: ['./crear-departamento.component.css']
})
export class CrearDepartamentoComponent implements OnInit {
  departamento: Departamento;

  constructor
    (
      private _departamentoService: DepartamentoService,    
      private router: Router
    ) {
    this.departamento = new Departamento();
  }

  ngOnInit(): void {
  
  }

  crear() {  
          this._departamentoService.create(this.departamento).subscribe(() => {
            this.router.navigate(['/departamento']);
          });
  

  }

  cancel() {
    this.router.navigate(['departamento']);
  }
}
