import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private usuariosService: UsuariosService, private router: Router, private alertService: AlertServiceService) { }
  public usuario: string;
  public password: string;
  public loginForm: FormGroup;

  ngOnInit() {
    this.createForm();
    this.router.navigate(["/inicio"]);
  }

  async login() {
    if (this.loginForm.invalid) return
    const datos = this.loginForm.value;
    const resultado = await this.usuariosService.login(datos);

    if (resultado.status == "ok") {
      this.loginForm.reset();
      this.alertService.presentAlert("Loggeado con éxito")
      this.router.navigate(["/inicio"]);
    }


  }

  get nombre() {
    return this.loginForm.get('nombre')
  }
  get pwd() {
    return this.loginForm.get('pwd')
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(255)]],
      pwd: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  validationMessages = {
    'nombre': [
      { type: 'required', message: 'Nombre obligatorio' },
    ],
    'pwd': [
      { type: 'required', message: 'Contraseña obligatoria' },
      { type: 'minlength', message: 'Min length of 8 characters' }
    ]
  }
}
