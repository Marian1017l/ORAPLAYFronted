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
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required]]
    });
  }
  
  IdentificarUsuario() {
    if (this.fGroup.invalid) {
      alert('Formulario inválido');
      return;
    }
    let usuario = this.obtenerFormGroup['correo'].value;
    let password = this.obtenerFormGroup['clave'].value;
    console.log(usuario, password);
    
    this.servicioSeguridad.identificarUsuario(usuario, password).subscribe({
      next: (data: UsuarioModel) => {
        if (!data) {
          alert('Credenciales incorrectas');
        } else {
          console.log(data);
          
          this.servicioSeguridad.AlmacenarDatosUsuarioIdentificado(data);
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
