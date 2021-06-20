import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoTicket } from 'src/app/Models/EstadoTicket';
import { EstadoTicketService } from 'src/app/Services/EstadoTicket/estado-ticket.service';

@Component({
  selector: 'app-crear-estado-ticket',
  templateUrl: './crear-estado-ticket.component.html',
  styleUrls: ['./crear-estado-ticket.component.css']
})
export class CrearEstadoTicketComponent implements OnInit {
  estadoTicket: EstadoTicket;
  constructor(
    private _estadoTicketService: EstadoTicketService,
    private router: Router
  ) {
    this.estadoTicket = new EstadoTicket();
  }

  ngOnInit(): void {
  }

  crearEstadoTicket() {
    if (this.estadoTicket) {
      this._estadoTicketService.create(this.estadoTicket).subscribe(() => {
        this.router.navigate(['/estado-ticket']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/estado-ticket']);
  }

}
