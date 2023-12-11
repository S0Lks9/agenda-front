import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginForm } from '../model/form/login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  public login (login: string, senha:string): Observable<any> {

    let loginForm: LoginForm = new LoginForm(login, senha);

    return this.http.post<any> ("http://localhost:8080/api/auth", loginForm);
  }

}
