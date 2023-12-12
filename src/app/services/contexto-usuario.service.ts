import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class ContextoUsuarioService {


  private _usuarioLogado: Usuario;

  constructor() { }


  get usuarioLogado() {
    return this._usuarioLogado;
  }

  set usuarioLogado (usuarioLogado: Usuario){
    this._usuarioLogado =usuarioLogado;
  }

}
