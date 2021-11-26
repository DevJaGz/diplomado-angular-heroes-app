import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesService } from './services/heroes.service';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EjemplosPipesComponent } from './components/ejemplos-pipes/ejemplos-pipes.component';
import { MayusculaPipe } from './pipes/mayuscula.pipe';
import { PassCustomPipe } from './pipes/pass-custom.pipe';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UsuarioService } from './services/usuario.service';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PaisService } from './services/pais.service';
import { FormularioNgmodelComponent } from './components/formularios/formulario-ngmodel/formulario-ngmodel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivosComponent } from './components/formularios/formulario-reactivos/formulario-reactivos.component';
import { PipesModule } from './pipes/pipes.module';


registerLocaleData(localEs);
registerLocaleData(localFr);




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeroeComponent,
    NavbarComponent,
    EjemplosPipesComponent,
    MayusculaPipe,
    PassCustomPipe,
    CapitalizarPipe,
    DomSeguroPipe,
    LoginComponent,
    UsuarioComponent,
    FormularioNgmodelComponent,
    FormularioReactivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  providers: [HeroesService,
    UsuarioService,
    PaisService,
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
