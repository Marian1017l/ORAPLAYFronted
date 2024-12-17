import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { UsuarioModel } from '../../../modelos/usuario.model';

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
    private servicioSeguridad: SeguridadService
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
      clave: campos["clave"].value,
      telefono: campos["telefono"].value
    }
    this.servicioSeguridad.RegistrarUsuario(datos).subscribe({
      next: (data:UsuarioModel)=>{
        console.log(data);
      },
      error: (error)=>{
        console.log(error);
      }
    });
  }

  get obtenerFormGroup(){
    return this.fGroup.controls;
  }
}
