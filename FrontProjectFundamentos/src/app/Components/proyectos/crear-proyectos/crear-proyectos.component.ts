import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Models/Usuario';

@Component({
  selector: 'app-crear-proyectos',
  templateUrl: './crear-proyectos.component.html',
  styleUrls: ['./crear-proyectos.component.css']
})
export class CrearProyectosComponent implements OnInit {
productOwners: Usuario[]=[];
  constructor(private router: Router) { }

  ngOnInit(): void {

    
  }

  cancel() {
    this.router.navigate(['proyecto']);
  }

}
