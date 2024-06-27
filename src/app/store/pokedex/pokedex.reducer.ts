import {createReducer, on} from "@ngrx/store";
import {Pokemon} from "../../models/pokemon.model";
import {
  clearSelectedPokemon,
  loadPokedex,
  loadPokedexError,
  loadPokedexSuccess, loadPokemonDetails, loadPokemonDetailsError, loadPokemonDetailsSuccess,
  selectPokemon
} from "./pokedex.actions";
import {state} from "@angular/animations";

export interface PokedexState {
  loading: boolean,
  error: null | string,
  pokedex: Pokemon[],
  selectedPokemon: Pokemon | null
}

const initialState: PokedexState = {
  loading: true,
  error: null,
  pokedex: [],
  selectedPokemon: null
  // TODO types and colors https://pokeapi.co/api/v2/type/
}

export const pokedexReducer = createReducer(
  initialState,
  on(loadPokedex , (state) => ({
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
  })),
  on(loadPokemonDetails , (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadPokemonDetailsSuccess, (state, {pokemon}) => ({
    ...state,
    loading: false,
    selectedPokemon: pokemon,
  })),
  on(loadPokemonDetailsError, (state, {message}) => ({
    ...state,
    error: message,
    loading: false,
  })),
  on(selectPokemon, (state, {pokemon}) => ({
    ...state,
    selectedPokemon: pokemon,
  })),
  on(clearSelectedPokemon, (state) => ({
    ...state,
    selectedPokemon: null,
  }))
)
