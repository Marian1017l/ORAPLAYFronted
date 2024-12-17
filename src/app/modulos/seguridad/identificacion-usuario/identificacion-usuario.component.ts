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
  
  IdentificarUsuario(){
    if(this.fGroup.invalid){
      alert('Formulario Invalido');
    }else{
      let usuario = this.obtenerFormGroup['usuario'].value;
      let clave = this.obtenerFormGroup['clave'].value;
      let claveCifrada = MD5(clave).toString();
      this.servicioSeguridad.identificarUsuario(usuario, claveCifrada).subscribe({
        next: (data:UsuarioModel) => {
          console.log(data);
          if(data.idUsuario == undefined || data.idUsuario == null){
            alert('Credenciales incorrectas')
          }else{

          console.log(data);
          if(this.servicioSeguridad.AlmacenarDatosUsuarioIdentificado(data)){
            this.router.navigate(['inicio']);
          }
         }
        },
        error: (err)=>{
          console.log(err);
          
        }
      })
    }
  }

  get obtenerFormGroup(){
    return this.fGroup.controls;
  }
}
