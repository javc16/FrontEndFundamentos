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

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    CrearProyectosComponent,
    EditarProyectosComponent,
    TicketsComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
