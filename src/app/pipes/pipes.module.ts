import { NgModule } from '@angular/core';
import { LimitStringPipe } from './limit-string.pipe';
import { CapitalizarPipe } from './capitalizar.pipe';
import { DomSeguroPipe } from './dom-seguro.pipe';
import { MayusculaPipe } from './mayuscula.pipe';
import { PassCustomPipe } from './pass-custom.pipe';



@NgModule({
  declarations: [
    LimitStringPipe,
    CapitalizarPipe,
    DomSeguroPipe,
    MayusculaPipe,
    PassCustomPipe
  ],
  exports: [
    LimitStringPipe,
    CapitalizarPipe,
    DomSeguroPipe,
    MayusculaPipe,
    PassCustomPipe
  ]
})
export class PipesModule { }
