import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../../modelos/usuario.model';
import { MD5 } from 'crypto-js';


@Component({
  selector: 'app-identificacion-usuario',
  templateUrl: './identificacion-usuario.component.html',
  styleUrl: './identificacion-usuario.component.css', 
  standalone: false
})
export class IdentificacionUsuarioComponent {
  fGroup: FormGroup= new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
   
  ){}

  ngOnInit(): void {
    this.ConstruirFormulario();
  }

  ConstruirFormulario(){
    this.fGroup = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required]]
    });
  }
  
  IdentificarUsuario() {
    if (this.fGroup.invalid) {
      alert('Formulario inválido');
      return;
    }
  
    let usuario = this.obtenerFormGroup['usuario'].value;
    let clave = this.obtenerFormGroup['clave'].value;
  
    this.servicioSeguridad.identificarUsuario(usuario, clave).subscribe({
      next: (esValido: boolean) => {
        if (!esValido) {
          alert('Credenciales incorrectas');
        } else {
          // Aquí podrías almacenar los datos del usuario, si es necesario
          this.router.navigate(['inicio']);
        }
      },
      error: (err) => {
        console.log(err);
        alert('Hubo un error al intentar identificar al usuario. Por favor, inténtalo nuevamente.');
      }
    });
  }
  

  get obtenerFormGroup(){
    return this.fGroup.controls;
  }
}
