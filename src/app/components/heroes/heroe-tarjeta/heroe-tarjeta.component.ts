import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IHeroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any;
  @Input() index: number | undefined = 0;
  @Output() edit = new EventEmitter();

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  verHeroe() {
    this._router.navigate(['/heroe', this.index])
  }
}
