import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionUsuarioComponent } from './identificacion-usuario/identificacion-usuario.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { ApuestasComponent } from './apuestas/apuestas.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';

@NgModule({
  declarations: [
    IdentificacionUsuarioComponent,
    CerrarSesionComponent,
    RecuperarClaveComponent,
    RegistroUsuarioComponent,
    ApuestasComponent,
    CambiarClaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    RouterOutlet,
    RouterLink, 
    ReactiveFormsModule, 
    FormsModule
  ]
}) 
export class SeguridadModule { }