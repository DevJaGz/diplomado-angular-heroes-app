import { Component, OnInit } from '@angular/core';
import { IHeroe } from '../../interfaces/heroes.interface';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


interface IMatch {
  imgPath: string,
  etiqueta: string
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  modoEdicion = false;
  indexHeroeModoEdicion = 0;

  formHeroe = new FormGroup({});

  nombres: IMatch[] = [
    { imgPath: 'assets/img/aquaman.png', etiqueta: 'Agua Man' },
    { imgPath: 'assets/img/batman.png', etiqueta: 'Bat Man' },
    { imgPath: 'assets/img/daredevil.png', etiqueta: 'Daredevil' },
    { imgPath: 'assets/img/hulk.png', etiqueta: 'Hulk' },
    { imgPath: 'assets/img/linterna-verde.png', etiqueta: 'Linterna Verde' },
    { imgPath: 'assets/img/spiderman.png', etiqueta: 'Spider Man' },
    { imgPath: 'assets/img/wolverine.png', etiqueta: 'Wolverine' },
  ]

  casas: IMatch[] = [
    { imgPath: 'assets/img/dc-logo.jpg', etiqueta: 'DC' },
    { imgPath: 'assets/img/marvel-logo.png', etiqueta: 'Marvel' },
  ]

  anios: number[] = []

  heroes: IHeroe[] = [];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.anios = this.getAnios()
    this.buildFormHeroe();
  }

  getAnios() {
    const max = new Date().getFullYear();
    const min = max - 60;
    const anios = [];
    for (let i = max; i >= min; i--) {
      anios.push(i)
    }
    return anios
  }

  buildFormHeroe(): void {
    this.formHeroe = this._formBuilder.group({
      nombre: [null, [Validators.required, this.isNotNull]],
      bio: ["", Validators.required],
      aparicion: [null, Validators.required],
      casa: [null, [Validators.required, this.isNotNull]]
    })
  }

  isNotNull(control: AbstractControl) {
    return ([null, "null"].includes(control.value)) ? { notNull: "debe ser no nulo" } : null
  }

  showWarning(controlName: string): boolean {
    return this.formHeroe.get(controlName)!.invalid && this.formHeroe.get(controlName)!.touched;
  }

  onSubmit(): void {
    const { value } = this.formHeroe
    console.log(value)
    this.createHero(this.matchFromForm(value))
  }

  matchFromForm(value: any) {
    const values = {
      ...value,
      nombre: this.nombres[parseInt(value.nombre)].etiqueta,
      img: this.nombres[parseInt(value.nombre)].imgPath,
      casa: this.casas[parseInt(value.casa)].etiqueta,
    }
    return values
  }

  matchToForm(heroe: IHeroe) {
    const value = {
      nombre: this.nombres.map(nombre => (nombre.etiqueta === heroe.nombre) ? true : false).indexOf(true).toString(),
      bio: heroe.bio,
      aparicion: heroe.aparicion,
      casa: this.casas.map(casa => (casa.etiqueta === heroe.casa) ? true : false).indexOf(true).toString()
    }
    return value
  }

  getCasaLogo(value: string) {
    return this.casas.filter(casa => casa.etiqueta === value)[0].imgPath
  }

  createHero(values: IHeroe) {
    const heroe = { ...values }
    console.log(heroe);
    this.heroes.push(heroe)
    this.reset({} as IHeroe)
  }

  reset(initValues: IHeroe) {
    this.formHeroe.reset({ ...initValues })
    this.modoEdicion = false;
  }

  editar(index: number) {
    console.log(this.heroes);
    this.modoEdicion = true;
    const value = this.matchToForm(this.heroes[index])
    this.formHeroe.setValue(value)
    this.indexHeroeModoEdicion = index
  }

  eliminar() {
    this.heroes.splice(this.indexHeroeModoEdicion, 1)
    this.reset({} as IHeroe)
  }

  aceptar() {
    this.heroes[this.indexHeroeModoEdicion] = this.matchFromForm(this.formHeroe.value)
    this.reset({} as IHeroe)
  }


}
