import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompromissoComponent } from './compromisso.component';
import { ListagemComponent } from './listagem/listagem.component';
import { DataBrPipe } from '../pipes/data-br.pipe';
import { PrimeiroNomePipe } from '../pipes/primeiro-nome.pipe';

const routes: Routes =
  [
    {
      path: '', component: CompromissoComponent
    }

  ];


@NgModule({
  declarations: [
    CompromissoComponent,
    ListagemComponent,
    DataBrPipe,
    PrimeiroNomePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [DataBrPipe,PrimeiroNomePipe]
})
export class CompromissoModule { }
