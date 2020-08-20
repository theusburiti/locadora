import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroFilmeComponent,
    ListaFilmesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
