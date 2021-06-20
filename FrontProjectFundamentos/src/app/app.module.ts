import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { CrearProyectosComponent } from './Components/proyectos/crear-proyectos/crear-proyectos.component';
import { EditarProyectosComponent } from './Components/proyectos/editar-proyectos/editar-proyectos.component';
import { TicketsComponent } from './Components/tickets/tickets.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductOwnersComponent } from './Components/product-owners/product-owners.component';
import { ReportesComponent } from './Components/reportes/reportes.component';
import { HomeComponent } from './Components/home/home.component';
import { EstadoTicketComponent } from './Components/estado-ticket/estado-ticket.component';
import { DesarrolladorComponent } from './Components/desarrollador/desarrollador.component';
import { DepartamentoComponent } from './Components/departamento/departamento.component';
import { CategoriaComponent } from './Components/categoria/categoria.component';
import { FormsModule } from '@angular/forms';
import { CrearProductOwnersComponent } from './Components/product-owners/crear-product-owners/crear-product-owners.component';
import { EditarProductOwnersComponent } from './Components/product-owners/editar-product-owners/editar-product-owners.component';
import { CrearCategoriaComponent } from './Components/categoria/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './Components/categoria/editar-categoria/editar-categoria.component';
import { CrearDepartamentoComponent } from './Components/departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './Components/departamento/editar-departamento/editar-departamento.component';
import { CrearDesarrolladorComponent } from './Components/desarrollador/crear-desarrollador/crear-desarrollador.component';
import { EditarDesarrolladorComponent } from './Components/desarrollador/editar-desarrollador/editar-desarrollador.component';
import { CrearEstadoTicketComponent } from './Components/estado-ticket/crear-estado-ticket/crear-estado-ticket.component';
import { EditarEstadoTicketComponent } from './Components/estado-ticket/editar-estado-ticket/editar-estado-ticket.component';
import { EditarTicketComponent } from './Components/tickets/editar-ticket/editar-ticket.component';
import { CrearTicketComponent } from './Components/tickets/crear-ticket/crear-ticket.component';
@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    CrearProyectosComponent,
    EditarProyectosComponent,
    TicketsComponent,
    FooterComponent,
    NavbarComponent,
    ProductOwnersComponent,
    ReportesComponent,
    HomeComponent,
    EstadoTicketComponent,
    DesarrolladorComponent,
    DepartamentoComponent,
    CategoriaComponent,
    CrearProductOwnersComponent,
    EditarProductOwnersComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    CrearDepartamentoComponent,
    EditarDepartamentoComponent,
    CrearDesarrolladorComponent,
    EditarDesarrolladorComponent,
    CrearEstadoTicketComponent,
    EditarEstadoTicketComponent,
    EditarTicketComponent,
    CrearTicketComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
