import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacionUsuarioComponent } from './identificacion-usuario/identificacion-usuario.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { ApuestasComponent } from './apuestas/apuestas.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';

const routes: Routes = [
  {
    path:'identificar-usuario',
    component: IdentificacionUsuarioComponent
  },
  {
    path:'cerrar-sesion',
    component: CerrarSesionComponent
  },
  {
    path:'recuperar-clave',
    component: RecuperarClaveComponent
  },
  {
    path:'registro-usuario',
    component: RegistroUsuarioComponent
  },
  {
    path: 'apuestas',
    component: ApuestasComponent
  },
  {
    path: 'cambiar-clave',
    component: CambiarClaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
