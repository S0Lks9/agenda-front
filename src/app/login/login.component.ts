import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  usuarioCtrl: FormControl<string>;
  senhaCtrl: FormControl<string>;
  messageUserInvalid: string;

  constructor(private readonly  fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm() {
    this.buildForm();
  }


  buildForm() {
    this.usuarioCtrl = new FormControl();
    this.senhaCtrl = new FormControl();
    this.loginForm = this.fb.group ({
      'login': this.usuarioCtrl,
      'senha': this.senhaCtrl
    });
  }

  public efetuarLogin() {
    let login = this.loginForm.get('login').value;
    let senha = this.loginForm.get('senha').value;

    this.authService.login (login, senha).subscribe ( (retorno) => {
      this.messageUserInvalid = "";
      this.router.navigate(['compromisso']);
    }, (error) => {
      if (error.status === 401) {
        this.messageUserInvalid = "Usuário ou Senha inválidos."
      }
    });
  }

}
