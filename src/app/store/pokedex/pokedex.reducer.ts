import {createReducer, on} from "@ngrx/store";
import {Pokemon} from "../../models/pokemon.model";
import {
  clearSelectedPokemon,
  loadPokedex,
  loadPokedexError,
  loadPokedexSuccess, loadPokemonDetails, loadPokemonDetailsError, loadPokemonDetailsSuccess,
  selectPokemon
} from "./pokedex.actions";

export interface PokedexState {
  loading: boolean,
  error: null | string,
  pokedex: Pokemon[],
  selectedPokemon: Pokemon | null
}

const pokedexCache = window.localStorage.getItem("pokedex");
const initialPokedexState = pokedexCache ? JSON.parse(pokedexCache) : '';

const initialState: PokedexState = {
  loading: true,
  error: null,
  pokedex: initialPokedexState ?? [],
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
  on(loadPokedexSuccess, (state, {pokedex}) => {
    window.localStorage.setItem("pokedex", JSON.stringify(pokedex));
    return {
      ...state,
      loading: false,
      pokedex
    }
  }),
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
