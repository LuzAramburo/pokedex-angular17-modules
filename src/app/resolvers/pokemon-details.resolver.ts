import {ResolveFn} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.state";
import {inject} from "@angular/core";
import {loadPokemonDetails} from "../store/pokedex/pokedex.actions";
import {selectedPokemon} from "../store/pokedex/pokedex.selectors";

export const pokemonDetailsResolver: ResolveFn<any> = (route, _) => {
  const pokedexStore: Store<AppState> = inject(Store)
  const url = `https://pokeapi.co/api/v2/pokemon/${route.params['pokemonId']}/`
  pokedexStore.dispatch(loadPokemonDetails({url}))
  return pokedexStore.select(selectedPokemon)
}
