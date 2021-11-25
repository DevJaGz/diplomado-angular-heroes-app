import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  texto = ""

  constructor(private _route: Router) { }
  ngOnInit(): void {
  }

  buscarHeroee() {
    console.log(this.texto);
    // this._route.navigate(['heroes', 'buscar', this.texto])
  }


  buscarHeroe(termino: string) {
    this._route.navigate(['heroes', 'buscar', termino])
  }
}
