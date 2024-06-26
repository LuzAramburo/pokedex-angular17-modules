import {createAction, props} from "@ngrx/store";
import {Pokemon} from "../../models/pokemon.model";
import {Result} from "../../models/pokedex.model";

export const loadPokedex = createAction(
  '[Pokedex] Load Pokedex',
);

export const loadPokedexSuccess = createAction(
  '[Pokedex] Load Pokedex Success',
  props<{pokedex: Result[]}>()
);

export const loadPokedexError = createAction(
  '[Pokedex] Load Pokedex Error',
  props<{message: string}>()
)
