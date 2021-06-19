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

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: 'estado-ticket',
    component: EstadoTicketComponent,
  },
  {
    path: 'proyecto',
    component: ProyectosComponent,
  },
  {
    path: 'crearproyecto',
    component: CrearProyectosComponent,
  },
  {
    path: 'editarproyecto',
    component: EditarProyectosComponent,
  },
  {
    path: 'product-owners',
    component: ProductOwnersComponent,
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
    path: 'departamento',
    component: DepartamentoComponent,
  },
  {
    path: 'categoria',
    component: CategoriaComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
