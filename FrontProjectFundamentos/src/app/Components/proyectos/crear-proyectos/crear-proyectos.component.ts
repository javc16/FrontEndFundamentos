import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductOwner } from 'src/app/Models/ProductOwner';

@Component({
  selector: 'app-crear-proyectos',
  templateUrl: './crear-proyectos.component.html',
  styleUrls: ['./crear-proyectos.component.css']
})
export class CrearProyectosComponent implements OnInit {
  productOwners: ProductOwner[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {


  }

  cancel() {
    this.router.navigate(['proyecto']);
  }

}
