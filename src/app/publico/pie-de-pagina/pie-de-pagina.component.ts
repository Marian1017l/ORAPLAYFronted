import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pie-de-pagina',
  imports: [RouterLink, CommonModule],
  templateUrl: './pie-de-pagina.component.html',
  styleUrl: './pie-de-pagina.component.css'
})
export class PieDePaginaComponent {

}
