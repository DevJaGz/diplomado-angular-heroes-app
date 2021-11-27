import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroeComponent } from './heroe/heroe.component';
import { BuscadorComponent } from './buscador/buscador.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '/:id', component: HeroeComponent },
      { path: 'heroe/:id', component: HeroeComponent },
      { path: 'buscar/:termino', component: BuscadorComponent },
      { path: '**', component: HeroesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
