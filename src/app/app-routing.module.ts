import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokedexComponent} from "./pokedex/pokedex.component";
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";

const routes: Routes = [
  {
    path: 'pokedex',
    component: PokedexComponent
  },
  {
    path: 'pokedex/:pokemonId',
    component: PokemonDetailsComponent
  },
  {
    path: '',
    redirectTo: 'pokedex',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
