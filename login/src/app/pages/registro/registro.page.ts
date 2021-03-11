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
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(255)]],
      edad: ['', [Validators.required,  Validators.maxLength(2)]],
      nombre: ['', [Validators.required]]
    })
  }

  validationMessages = {
    'email': [
      { type: 'required', message: 'Mail required' },
      { type: 'maxlength', message: 'Max length of 255 characters' },
      { type: 'email', message: 'Valid email format' },
    ],
    'password': [
      { type: 'required', message: 'Password required' },
      { type: 'minlength', message: 'Min length of 8 characters' },
      { type: 'maxlength', message: 'Max length of 255 characters' }
    ],
    'nombre': [
      { type: 'required', message: 'Password required' },
      { type: 'minlength', message: 'Min length of 8 characters' },
      { type: 'maxlength', message: 'Max length of 255 characters' }
    ],
    'edad': [
      { type: 'required', message: 'Password required' },
      { type: 'minlength', message: 'Min length of 8 characters' },
      { type: 'maxlength', message: 'Max length of 255 characters' }
    ]
  }
}
