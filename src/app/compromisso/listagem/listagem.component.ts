import { Component, OnInit } from '@angular/core';
import { Compromisso } from 'src/app/model/compromisso';
import { CompromissoService } from 'src/app/services/compromisso.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {


  compromissos: Compromisso[] = [];

  constructor(private compromissoService: CompromissoService) { }

  ngOnInit(): void {

    this.compromissoService.listar().subscribe (listaCompromisso => {
      this.compromissos = listaCompromisso;
    })

  }

}
