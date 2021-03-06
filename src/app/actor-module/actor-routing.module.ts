import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from '../components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from '../components/actor-listado/actor-listado.component';
import { ActorComponent } from './actor.component';

const routes: Routes = [
  
  { path: '',
   component: ActorComponent
  },
  {
    path:'alta',
    component: ActorAltaComponent
  },
  {
    path:'listado',
    component: ActorListadoComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
