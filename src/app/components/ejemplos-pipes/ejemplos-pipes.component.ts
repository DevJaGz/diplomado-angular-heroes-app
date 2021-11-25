import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ejemplos-pipes',
  templateUrl: './ejemplos-pipes.component.html',
  styleUrls: ['./ejemplos-pipes.component.css']
})
export class EjemplosPipesComponent implements OnInit {

  nombre = "Julian Andres";
  PI = Math.PI;
  porcentaje = 0.235;
  salario = 24500;
  fecha = new Date();
  hidePassword = false;
  pass = "khaspodkijhsaodifh";
  nombre2 = "JuLian AnDres GomEz";
  capitalizar = false;

  valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa cumplida")
      // reject("Promesa NO cumplida")
    }, 2000)
  })

  persona = {
    nombre: "Julian",
    edad: 20
  }

  video: string = 'https://www.youtube-nocookie.com/embed/Kl3_Gmn4Ujg';
  idioma: string = 'fr';


  constructor() { }

  ngOnInit(): void {
  }



}
