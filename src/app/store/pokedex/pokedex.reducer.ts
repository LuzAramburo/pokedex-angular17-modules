import {createReducer, on} from "@ngrx/store";
import {Pokemon} from "../../models/pokemon.model";
import {loadPokedex, loadPokedexError, loadPokedexSuccess} from "./pokedex.actions";

export interface PokedexState {
  loading: boolean,
  error: null | string,
  pokedex: Pokemon[]
}

const initialState: PokedexState = {
  loading: true,
  error: null,
  pokedex: []
}

export const pokedexReducer = createReducer(
  initialState,
  on(loadPokedex , (state, action) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadPokedexSuccess, (state, {pokedex}) => ({
    ...state,
    loading: false,
    pokedex
  })),
  on(loadPokedexError, (state, {message}) => ({
    ...state,
    error: message,
    loading: false,
  }))
)
