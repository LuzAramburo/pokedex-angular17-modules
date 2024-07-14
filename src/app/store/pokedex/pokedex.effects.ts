import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PokedexService} from "../../pokedex/pokedex.service";
import {
  loadPokedex,
  loadPokedexError,
  loadPokedexSuccess,
  loadPokemonDetails,
  loadPokemonDetailsSuccess, loadTypes, loadTypesError, loadTypesSuccess,
} from "./pokedex.actions";
import {catchError, map, of, switchMap, withLatestFrom} from "rxjs";
import {select, Store} from "@ngrx/store";
import {pokedexList} from "./pokedex.selectors";


@Injectable()
export class PokedexEffects {
  loadPokedex$ = createEffect(() => this.actions$.pipe(
    ofType(loadPokedex),
    withLatestFrom(this.store.pipe(select(pokedexList))),
    switchMap(([_, pokedex]) => {
      if (pokedex.length > 0) return of(loadPokedexSuccess({pokedex}))
      else return this.pokedexService.getPokedex().pipe(
          map(pokedex => loadPokedexSuccess({pokedex})),
          catchError((error) => {
            console.error(error)
            return of(loadPokedexError({message: 'Something went wrong fetching the pokedex. Please try again later.'}))
          })
        )
      }
    )
  ))

  loadPokemonDetails$ = createEffect(() => this.actions$.pipe(
    ofType(loadPokemonDetails),
    withLatestFrom(this.store.select(pokedexList)),
    switchMap(([{url}, state]) => {
      const findPokemon = state.find(pokemon => pokemon.url === url)
      if (findPokemon) return of(loadPokemonDetailsSuccess({pokemon: findPokemon}))
      else return this.pokedexService.getPokemonDetails(url).pipe(
        map(pokemon => loadPokemonDetailsSuccess({pokemon})),
        catchError(error => {
          console.error(error)
          return of(loadPokedexError({message: 'Something went wrong fetching the pokemon details. Please try again later.'}))
        })
      )
    })
  ))

  loadTypes$ = createEffect(() => this.actions$.pipe(
    ofType(loadTypes),
    switchMap(() =>
    this.pokedexService.getTypes().pipe(
      map(types => loadTypesSuccess({types})),
      catchError((error) => {
        console.error(error)
        return of(loadTypesError({message: 'Something went wrong fetching the pokemon types. Please try again later.'}))
      })
    ))
  ))

  constructor(
    private actions$: Actions,
    private pokedexService: PokedexService,
    protected store: Store
  ) {
  }
}
