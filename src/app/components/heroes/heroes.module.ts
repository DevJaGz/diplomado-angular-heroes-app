import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from "./heroes.component";
import { HeroeTarjetaComponent } from "./heroe-tarjeta/heroe-tarjeta.component";
import { BuscadorComponent } from './buscador/buscador.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroeTarjetaComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
