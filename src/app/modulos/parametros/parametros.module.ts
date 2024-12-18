import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { HistorialDeApuestasComponent } from './cliente/historial-de-apuestas/historial-de-apuestas.component';
import { ListarMetodoDePagoComponent } from './cliente/metodos-de-pago/listar-metodo-de-pago/listar-metodo-de-pago.component';
import { CrearMetodoDePagoComponent } from './cliente/metodos-de-pago/crear-metodo-de-pago/crear-metodo-de-pago.component';


@NgModule({
  declarations: [
    CrearClienteComponent,
    EditarClienteComponent,
    HistorialDeApuestasComponent,
    ListarMetodoDePagoComponent,
    CrearMetodoDePagoComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
