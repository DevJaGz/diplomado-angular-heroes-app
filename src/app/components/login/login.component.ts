import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _usuarioService: UsuarioService, private _router: Router) { }

  ngOnInit(): void {

  }

  onLogin(usuario: IUsuario) {
    this._usuarioService.addUsuario(usuario);
    this._router.navigate(['home'])
  }

}
