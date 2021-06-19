import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProyectosComponent } from './Components/proyectos/crear-proyectos/crear-proyectos.component';
import { EditarProyectosComponent } from './Components/proyectos/editar-proyectos/editar-proyectos.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';

const routes: Routes = [ 
{
  path: 'proyecto',
  component: ProyectosComponent,
},{
  path: 'crearproyecto',
  component: CrearProyectosComponent,
},{
  path: 'editarproyecto',
  component: EditarProyectosComponent,
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
