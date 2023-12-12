import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContextoUsuarioService } from '../services/contexto-usuario.service';

@Component({
  selector: 'app-compromisso',
  templateUrl: './compromisso.component.html',
  styleUrls: ['./compromisso.component.scss']
})
export class CompromissoComponent implements OnInit {

  constructor(private router: Router,
              public contextoUsuarioService: ContextoUsuarioService
    ) { }

  ngOnInit(): void {
  }


  public efetuarLogout():void {
    this.router.navigate(['login']);
  }

  public getUsuarioLogado():string {
    if (this.contextoUsuarioService.usuarioLogado){
      return this.contextoUsuarioService.usuarioLogado.nome;
    } else {
      return "";
    }


  }
}
