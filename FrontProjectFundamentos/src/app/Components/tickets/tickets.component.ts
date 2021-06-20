import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/Models/Ticket';
import { TicketService } from 'src/app/Services/Ticket/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  Tickets: Ticket[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'estado', 'categoria', 'desarrollador', 'action'];

  // displayedColumns: string[] = ['id', 'nombre', 'descripcionIncidente', 'descripcionSolucion', 'diasTranscurridos', 'estado', 'fechaInicial', 'fechaFinal', 'departamento', 'categoria', 'desarrollador', 'action'];
  constructor(private _ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
    this._ticketService.getAll().subscribe((data: any[]) => {
      this.Tickets = data;
      console.log(this.Tickets);
    })
  }

  create(): void {
    this.router.navigate(['tickets/crear-ticket']);
  }

  

}
