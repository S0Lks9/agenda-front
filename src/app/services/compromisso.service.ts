import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compromisso } from '../model/compromisso';

@Injectable({
  providedIn: 'root'
})
export class CompromissoService {

  constructor(private http: HttpClient) { }


  public listar (): Observable<Compromisso[]> {

    return this.http.get<Compromisso[]> ("http://localhost:8080/api/compromisso");
  }
}
