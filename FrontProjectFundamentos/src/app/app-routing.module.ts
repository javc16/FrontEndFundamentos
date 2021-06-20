import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProyectosComponent } from './Components/proyectos/crear-proyectos/crear-proyectos.component';
import { EditarProyectosComponent } from './Components/proyectos/editar-proyectos/editar-proyectos.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { ProductOwnersComponent } from './Components/product-owners/product-owners.component';
import { ReportesComponent } from './Components/reportes/reportes.component';
import { HomeComponent } from './Components/home/home.component';
import { TicketsComponent } from './Components/tickets/tickets.component';
import { EstadoTicketComponent } from './Components/estado-ticket/estado-ticket.component';
import { DesarrolladorComponent } from './Components/desarrollador/desarrollador.component';
import { DepartamentoComponent } from './Components/departamento/departamento.component';
import { CategoriaComponent } from './Components/categoria/categoria.component';
import { CrearProductOwnersComponent } from './Components/product-owners/crear-product-owners/crear-product-owners.component';
import { EditarProductOwnersComponent } from './Components/product-owners/editar-product-owners/editar-product-owners.component';
import { CrearCategoriaComponent } from './Components/categoria/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './Components/categoria/editar-categoria/editar-categoria.component';
import { CrearDepartamentoComponent } from './Components/departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './Components/departamento/editar-departamento/editar-departamento.component';
import { CrearDesarrolladorComponent } from './Components/desarrollador/crear-desarrollador/crear-desarrollador.component';
import { EditarDesarrolladorComponent } from './Components/desarrollador/editar-desarrollador/editar-desarrollador.component';
import { CrearTicketComponent } from './Components/tickets/crear-ticket/crear-ticket.component';
import { EditarTicketComponent } from './Components/tickets/editar-ticket/editar-ticket.component';
import { CrearEstadoTicketComponent } from './Components/estado-ticket/crear-estado-ticket/crear-estado-ticket.component';
import { EditarEstadoTicketComponent } from './Components/estado-ticket/editar-estado-ticket/editar-estado-ticket.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: 'tickets/crear-ticket',
    component: CrearTicketComponent,
  },
  {
    path: 'tickets/editar-ticket/:id',
    component: EditarTicketComponent,
  },
  {
    path: 'estado-ticket',
    component: EstadoTicketComponent,
  },
  {
    path: 'estado-ticket/crear-estado-ticket',
    component: CrearEstadoTicketComponent,
  },
  {
    path: 'estado-ticket/editar-estado-ticket/:id',
    component: EditarEstadoTicketComponent,
  },
  {
    path: 'proyecto',
    component: ProyectosComponent,
  },
  {
    path: 'proyecto/crear-proyecto',
    component: CrearProyectosComponent,
  },
  {
    path: 'proyecto/editar-proyecto/:id',
    component: EditarProyectosComponent,
  },
  {
    path: 'product-owners',
    component: ProductOwnersComponent,
  },
  {
    path: 'product-owners/crear-product-owners',
    component: CrearProductOwnersComponent,
  },
  {
    path: 'product-owners/editar-product-owners/:id',
    component: EditarProductOwnersComponent,
  },
  {
    path: 'reportes',
    component: ReportesComponent,
  },
  {
    path: 'desarrollador',
    component: DesarrolladorComponent,
  },
  {
    path: 'desarrollador/crear-desarrollador',
    component: CrearDesarrolladorComponent,
  },
  {
    path: 'desarrollador/editar-desarrollador/:id',
    component: EditarDesarrolladorComponent,
  },
  {
    path: 'departamento',
    component: DepartamentoComponent,
  },
  {
    path: 'departamento/crear-departamento',
    component: CrearDepartamentoComponent,
  },
  {
    path: 'departamento/editar-departamento/:id',
    component: EditarDepartamentoComponent,
  },
  {
    path: 'categoria',
    component: CategoriaComponent,
  },
  {
    path: 'categoria/crear-categoria',
    component: CrearCategoriaComponent,
  },
  {
    path: 'categoria/editar-categoria/:id',
    component: EditarCategoriaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
