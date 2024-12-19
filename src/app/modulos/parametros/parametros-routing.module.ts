import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { HistorialDeApuestasComponent } from './cliente/historial-de-apuestas/historial-de-apuestas.component';
import { CrearMetodoDePagoComponent } from './cliente/metodos-de-pago/crear-metodo-de-pago/crear-metodo-de-pago.component';
import { ListarMetodoDePagoComponent } from './cliente/metodos-de-pago/listar-metodo-de-pago/listar-metodo-de-pago.component';
import { ListarPartidoComponent } from './partido/listar-partido/listar-partido.component';
import { CrearApuestaComponent } from './apuesta/crear-apuesta/crear-apuesta.component';
import { ListarApuestaComponent } from './apuesta/listar-apuesta/listar-apuesta.component';

const routes: Routes = [
  {
    path:'crear-cliente',
    component: CrearClienteComponent
  },
  {
    path:'editar-cliente',
    component: EditarClienteComponent
  },
  {
    path:'historial-apuestas',
    component: HistorialDeApuestasComponent
  },
  {
    path:'crear-metodos-pago',
    component: CrearMetodoDePagoComponent
  },
  {
    path:'listar-metodos-pago',
    component: ListarMetodoDePagoComponent
  },
  {
    path: 'listar-partidos',
    component: ListarPartidoComponent
  },
  {
    path:'crear-apuesta',
    component: CrearApuestaComponent
  },
  {
    path:'listar-apuestas',
    component: ListarApuestaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
