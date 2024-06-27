import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PokedexService} from "../../pokedex/pokedex.service";
import {
  loadPokedex,
  loadPokedexError,
  loadPokedexSuccess,
  loadPokemonDetails, loadPokemonDetailsSuccess,
} from "./pokedex.actions";
import {catchError, map, of, switchMap, tap} from "rxjs";


@Injectable()
export class PokedexEffects {
  loadPokedex$ = createEffect(() => this.actions$.pipe(
    ofType(loadPokedex),
    switchMap(() =>
      this.pokedexService.getPokedex().pipe(
        map(pokedex => loadPokedexSuccess({pokedex})),
        catchError((error) => {
          console.error(error)
          return of(loadPokedexError({message: 'Something went wrong fetching the pokedex. Please try again later.'}))
        })
      )
    )
  ))

  loadPokemonDetails$ = createEffect(() => this.actions$.pipe(
    ofType(loadPokemonDetails),
    switchMap(({url}) =>
    this.pokedexService.getPokemonDetails(url).pipe(
      map(pokemon => loadPokemonDetailsSuccess({pokemon})),
      catchError(error => {
        console.error(error)
        return of(loadPokedexError({message: 'Something went wrong fetching the pokemon details. Please try again later.'}))
      })
    ))
  ))

  constructor(
    private actions$: Actions,
    private pokedexService: PokedexService
  ) {
  }
}
