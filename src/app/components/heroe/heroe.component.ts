import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHeroe } from 'src/app/interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: IHeroe = {
    nombre: '',
    bio: '',
    img: '',
    aparicion: '',
    casa: ''
  }
  constructor(private _activeRoute: ActivatedRoute, private _heroesService: HeroesService) {

    this._activeRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id'])
    })

  }

  ngOnInit(): void {
  }



}
