import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoTicket } from 'src/app/Models/EstadoTicket';
import { EstadoTicketService } from 'src/app/Services/EstadoTicket/estado-ticket.service';

@Component({
  selector: 'app-estado-ticket',
  templateUrl: './estado-ticket.component.html',
  styleUrls: ['./estado-ticket.component.css']
})
export class EstadoTicketComponent implements OnInit {
  estadoTickets: EstadoTicket[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'action'];
  constructor(private router: Router, private _estadoTicketService: EstadoTicketService) { }

  ngOnInit(): void {
    this._estadoTicketService.getAll().subscribe((data: any) => {
      this.estadoTickets = data;
    })
  }

  create() {
    this.router.navigate(['estado-ticket/crear-estado-ticket']);
  }



}
