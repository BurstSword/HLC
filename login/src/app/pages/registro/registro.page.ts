import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuariosService) { }

  public registerForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  async registro() {
    if (this.registerForm.invalid) return
    const data = this.registerForm.value;

    console.log(data);
    const resultado = await this.usuarioService.registro(data);
    console.log(resultado);
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
