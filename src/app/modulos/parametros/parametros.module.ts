import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { HistorialDeApuestasComponent } from './cliente/historial-de-apuestas/historial-de-apuestas.component';
import { MetodosDePagoComponent } from './cliente/metodos-de-pago/metodos-de-pago.component';


@NgModule({
  declarations: [
    CrearClienteComponent,
    EditarClienteComponent,
    HistorialDeApuestasComponent,
    MetodosDePagoComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
