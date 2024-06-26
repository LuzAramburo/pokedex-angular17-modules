import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PokedexState} from "./pokedex.reducer";

export const pokedexSelector = createFeatureSelector<PokedexState>('pokedex')

export const pokedexList = createSelector(
  pokedexSelector,
  state => state.pokedex
)
export const pokedexLoading = createSelector(
  pokedexSelector,
  state => state.loading
)

// TODO app-wide error/success system notification
export const pokedexError = createSelector(
  pokedexSelector,
  state => state.error
)
