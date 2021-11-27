
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private _activeRoute: ActivatedRoute, private _heroesService: HeroesService, private _route: Router) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(params => {
      this.termino = params["termino"]
      console.log("termino:", this.termino);
      this.heroes = this._heroesService.buscarHeroe(this.termino)
    })

  }

  goToEdit(index: number): void {
    console.log("GO TO EDIT", index);
    this._route.navigate(['heroes', index])
  }

}
