import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Models/Categoria';
import { Departamento } from 'src/app/Models/Departamento';
import { Desarrollador } from 'src/app/Models/Desarrollador';
import { EstadoTicket } from 'src/app/Models/EstadoTicket';
import { Ticket } from 'src/app/Models/Ticket';
import { CategoriaService } from 'src/app/Services/Categoria/categoria.service';
import { DepartamentoService } from 'src/app/Services/Departamento/departamento.service';
import { DesarrolladorService } from 'src/app/Services/Desarrollador/desarrollador.service';
import { EstadoTicketService } from 'src/app/Services/EstadoTicket/estado-ticket.service';
import { TicketService } from 'src/app/Services/Ticket/ticket.service';

@Component({
  selector: 'app-crear-ticket',
  templateUrl: './crear-ticket.component.html',
  styleUrls: ['./crear-ticket.component.css']
})
export class CrearTicketComponent implements OnInit {
  ticket: Ticket;
  desarrolladores: Desarrollador[] = [];
  departamentos: Departamento[] = [];
  categorias: Categoria[] = [];
  estadosTicket: EstadoTicket[] = [];

  constructor
    (
      private _ticketService: TicketService,
      private _desarrolladorService: DesarrolladorService,
      private _departamentoService: DepartamentoService,
      private _categoriaService: CategoriaService,
      private _estadoTicketService: EstadoTicketService,
      private router: Router
    ) {
    this.ticket = new Ticket();
  }

  ngOnInit(): void {
     this._desarrolladorService.getAll().subscribe(res => {
      this.desarrolladores = res;
    })

    this._departamentoService.getAll().subscribe(res => {
      this.departamentos = res;
    })

    this._categoriaService.getAll().subscribe(res => {
      this.categorias = res;
    })

    this._estadoTicketService.getAll().subscribe(res => {
      this.estadosTicket = res;
    })
  }

  crear() {
    if (this.ticket) {
      this.ticket.fechaInicial = new Date();
      this.ticket.fechaCreacion = new Date();
      this.ticket.idEstadoTicket = 1;
      debugger;      
      this._ticketService.create(this.ticket).subscribe(() => {
        this.router.navigate(['/tickets']);
      });
    }

  }

  cancel() {
    this.router.navigate(['proyecto']);
  }

}
