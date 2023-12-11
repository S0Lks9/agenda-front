import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compromisso',
  templateUrl: './compromisso.component.html',
  styleUrls: ['./compromisso.component.scss']
})
export class CompromissoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  public efetuarLogout():void {
    this.router.navigate(['login']);
  }


}
