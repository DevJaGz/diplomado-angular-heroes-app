import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IPais } from '../interfaces/pais';
import { IResCountry } from '../interfaces/res-country';


@Injectable({
  providedIn: 'root'
})
export class PaisService {


  constructor(private _http: HttpClient) {
    console.log("Servicio Paises Listo para usar");
  }

  getPaises() {
    return this._http.get<IResCountry[]>('https://restcountries.com/v2/lang/es')
      .pipe(
        map((res: IResCountry[]): IPais[] =>
          res.map(
            (pais: IResCountry): IPais => ({ nombre: pais.name, codigo: pais.alpha3Code })
          )
        )
      )

  }
}
