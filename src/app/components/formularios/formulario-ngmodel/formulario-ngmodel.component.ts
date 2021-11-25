import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPais } from 'src/app/interfaces/pais';
import { PaisService } from '../../../services/pais.service';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-formulario-ngmodel',
  templateUrl: './formulario-ngmodel.component.html',
  styleUrls: ['./formulario-ngmodel.component.css']
})
export class FormularioNgmodelComponent implements OnInit {

  paises: IPais[] = [];

  testPaises$: Observable<IPais[]> = new Observable<IPais[]>();
  testPaises: IPais[] = [];

  constructor(private _paisesService: PaisService) { }

  ngOnInit(): void {
    // Obtener datos manera 1
    this._paisesService.getPaises().subscribe((res: IPais[]) => {
      if (res) {
        this.paises = res;
      }
    },
      error => {
        console.log(error);
      },
      () => {
        console.log("Datos recibidos. Manera 1");

      }
    )

    // Obtener datos manera 2
    this.testPaises$ = this._paisesService.getPaises().pipe(
      map((pais: IPais[]) => {
        this.testPaises = pais
        return pais
      }),
      catchError(error => {
        console.log(error);
        return of([])
      }),
      finalize(() => console.log("Datos recibidos. Manera 2"))
    )
  }

  guardar(form: NgForm) {
    console.log("FORMULARIO GUARDADO!", form.value);
  }


}
