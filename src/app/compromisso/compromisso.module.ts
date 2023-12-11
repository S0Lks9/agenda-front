import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompromissoComponent } from './compromisso.component';

const routes: Routes =
  [
    {
      path: '', component: CompromissoComponent
    }

  ];


@NgModule({
  declarations: [
    CompromissoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompromissoModule { }
