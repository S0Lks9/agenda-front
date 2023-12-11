import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  usuarioCtrl: FormControl<string>;
  senhaCtrl: FormControl<string>;

  constructor(private readonly  fb: FormBuilder) { }

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
      'usuario': this.usuarioCtrl,
      'senha': this.senhaCtrl
    });
  }

}
