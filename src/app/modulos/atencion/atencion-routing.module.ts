import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './ayuda/ayuda.component';
import { NostrosComponent } from './nostros/nostros.component';

const routes: Routes = [
  {
    path: 'ayuda',
    component: AyudaComponent
  },
  {
    path: 'nosotros',
    component: NostrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtencionRoutingModule { }
