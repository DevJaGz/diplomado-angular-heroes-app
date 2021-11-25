import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { IHeroe } from '../../../interfaces/heroes.interface';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes: IHeroe[] = [];
  termino: string = "";
  constructor(private _activeRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(params => {
      this.termino = params["termino"]
      this.heroes = this._heroesService.buscarHeroe(this.termino)
    })

  }

}
