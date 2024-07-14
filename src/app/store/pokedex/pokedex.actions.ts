import {createAction, props} from "@ngrx/store";
import {Pokemon} from "../../models/pokemon.model";
import {Base} from "../../models/base.model";

export const loadPokedex = createAction(
  '[Pokedex] Load Pokedex',
);

export const loadPokedexSuccess = createAction(
  '[Pokedex] Load Pokedex Success',
  props<{ pokedex: Pokemon[] }>()
);

export const loadPokedexError = createAction(
  '[Pokedex] Load Pokedex Error',
  props<{ message: string }>()
)

export const loadPokemonDetails = createAction(
  '[Pokedex] Load pokemon Details',
  props<{ url: string }>()
)

export const loadPokemonDetailsSuccess = createAction(
  '[Pokedex] Load pokemon Details Success',
  props<{ pokemon: Pokemon }>()
)

export const loadPokemonDetailsError = createAction(
  '[Pokedex] Load pokemon Details Error',
  props<{ message: string }>()
)

export const selectPokemon = createAction(
  '[Pokedex] Select pokemon',
  props<{ pokemon: Pokemon }>()
)

export const clearSelectedPokemon = createAction(
  '[Pokedex] Clear selected pokemon',
)

export const loadTypes = createAction(
  '[Pokedex] Load Types',
)

export const loadTypesSuccess = createAction(
  '[Pokedex] Load Types Success',
  props<{ types: Base[] }>()
)

export const loadTypesError = createAction(
  '[Pokedex] Load types Error',
  props<{ message: string }>()
)
