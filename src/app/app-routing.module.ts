import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokedexComponent} from "./pokedex/pokedex.component";
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";
import {pokemonDetailsResolver} from "./resolvers/pokemon-details.resolver";
import {AddPokemonComponent} from "./add-pokemon/add-pokemon.component";

const routes: Routes = [
  {
    path: 'pokedex',
    component: PokedexComponent
  },
  {
    path: 'pokedex/add',
    component: AddPokemonComponent
  },
  {
    path: 'pokedex/:pokemonId',
    component: PokemonDetailsComponent,
    resolve: {
      _: pokemonDetailsResolver
    },
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
