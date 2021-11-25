import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() resultado = new EventEmitter();

  contador = 0;
  constructor() { }

  ngOnInit(): void {
  }

  modificarContador(valor: number) {
    this.contador += valor;
    this.resultado.emit(this.contador)
  }

}
