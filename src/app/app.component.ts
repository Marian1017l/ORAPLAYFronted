import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PieDePaginaComponent } from './publico/pie-de-pagina/pie-de-pagina.component';
import { EncabezadoComponent } from './publico/encabezado/encabezado.component';
import { HttpClientModule } from '@angular/common/http';
import { Router, NavigationStart } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, PieDePaginaComponent, EncabezadoComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ORAPLAY';
  rutaActual: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationStart) {
        this.rutaActual = event.url;
      }
    });
  }

  ngOnInit(): void {
    initFlowbite();
    this.rutaActual = this.router.url;
    
  }
}
