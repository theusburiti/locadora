import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component';

const routes: Routes = [
{path:'lista-filmes', component: ListaFilmesComponent},
{path:'cadastro-filmes', component: CadastroFilmeComponent},
{path:'', redirectTo:'cadastro-filmes', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
