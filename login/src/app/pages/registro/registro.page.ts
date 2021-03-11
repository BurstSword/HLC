import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuariosService, private router:Router,private alertService:AlertServiceService) { }

  public registerForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  async registro() {
    if (this.registerForm.invalid) return
    const data = this.registerForm.value;

    
    await this.usuarioService.registro(data);
    this.alertService.presentAlert("Registrado con éxito");
    this.router.navigate(["/login"]);
  }

  get nombre() {
    return this.registerForm.get('nombre')
  }
  get email() {
    return this.registerForm.get('email')
  }
  get edad() {
    return this.registerForm.get('edad')
  }
  get password() {
    return this.registerForm.get('password')
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      edad: ['', [Validators.required,  Validators.maxLength(2)]],
      nombre: ['', [Validators.required]]
    })
  }

  validationMessages = {
    'email': [
      { type: 'required', message: 'Email obligatorio' },
      { type: 'email', message: 'Formato inválido' },
    ],
    'password': [
      { type: 'required', message: 'Contraseña obligatoria' },
      { type: 'minlength', message: 'Mínimo 8 caracteres' }
    ],
    'nombre': [
      { type: 'required', message: 'Nombre obligatorio' },
    ],
    'edad': [
      { type: 'required', message: 'Edad obligatoria' },
      { type: 'maxlength', message: 'Máximo 2 caracteres de edad' }
    ]
  }
}
