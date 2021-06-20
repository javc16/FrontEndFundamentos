import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Desarrollador } from 'src/app/Models/Desarrollador';
import { DesarrolladorService } from 'src/app/Services/Desarrollador/desarrollador.service';

@Component({
  selector: 'app-desarrollador',
  templateUrl: './desarrollador.component.html',
  styleUrls: ['./desarrollador.component.css']
})
export class DesarrolladorComponent implements OnInit {
  desarrolladores: Desarrollador[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'action'];
  constructor(private router: Router, private _desarrolladorService: DesarrolladorService) { }

  ngOnInit(): void {
    this._desarrolladorService.getAll().subscribe((data: any) => {
      this.desarrolladores = data;
    })
  }

  create() {
    this.router.navigate(['desarrollador/crear-desarrollador']);
  }
}
