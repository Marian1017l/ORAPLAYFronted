import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtencionRoutingModule } from './atencion-routing.module';
import { AyudaComponent } from './ayuda/ayuda.component';
import { NostrosComponent } from './nostros/nostros.component';


@NgModule({
  declarations: [
    AyudaComponent,
    NostrosComponent
  ],
  imports: [
    CommonModule,
    AtencionRoutingModule
  ]
})
export class AtencionModule { }
