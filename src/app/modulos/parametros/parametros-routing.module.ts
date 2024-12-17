import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { HistorialDeApuestasComponent } from './cliente/historial-de-apuestas/historial-de-apuestas.component';
import { MetodosDePagoComponent } from './cliente/metodos-de-pago/metodos-de-pago.component';

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
    path:'metodos-pago',
    component: MetodosDePagoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
