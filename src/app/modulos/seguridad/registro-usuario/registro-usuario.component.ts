import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { UsuarioModel } from '../../../modelos/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  standalone: false,
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {
  fGroup: FormGroup= new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) {}

  ngOnInit(){
    this.ConstruirFormulario();
  }

  ConstruirFormulario(){
    this.fGroup = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['',[Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  Registrarse(){
    let campos=this.obtenerFormGroup
    let datos={
      nombre: campos["nombre"].value,
      apellido: campos["apellido"].value,
      correo: campos["correo"].value,
      password: campos["clave"].value,
      telefono: campos["telefono"].value
    }
    console.log(datos);
    
    this.servicioSeguridad.RegistrarUsuario(datos).subscribe({
      next: (data: any) => {
        console.log('Registro exitoso:', data);
        this.router.navigate(['inicio']);
      },
      error: (error) => {
        console.error('Error en el registro:', error.error); // Muestra el mensaje detallado
      },
    });
  }

  get obtenerFormGroup(){
    return this.fGroup.controls;
  }
}
