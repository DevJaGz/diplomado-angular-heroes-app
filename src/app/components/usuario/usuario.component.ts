import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario = {} as IUsuario;

  constructor(private _usuarioService: UsuarioService, private _router: Router) { }

  ngOnInit(): void {
    this._usuarioService.getUsuario().subscribe((usuario: IUsuario) => {
      this.usuario = usuario;
    })
  }




  logout() {
    this.usuario = {} as IUsuario;
    this._usuarioService.usuario$.complete();
    this._router.navigate(['login'])
  }

}

