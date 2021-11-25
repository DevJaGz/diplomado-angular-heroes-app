import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario$: Subject<IUsuario>;


  constructor() {
    this.usuario$ = new Subject<IUsuario>();
  }

  addUsuario(usuario: IUsuario) {
    this.usuario$.next(usuario);
  }

  getUsuario(): Observable<IUsuario> {
    return this.usuario$.asObservable();
  }
}
