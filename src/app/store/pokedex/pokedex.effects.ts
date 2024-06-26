import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PokedexService} from "../../pokedex/pokedex.service";
import {loadPokedex, loadPokedexError, loadPokedexSuccess} from "./pokedex.actions";
import {catchError, map, of, switchMap, tap} from "rxjs";


@Injectable()
export class PokedexEffects {
  loadPokedex$ = createEffect(() => this.actions$.pipe(
    ofType(loadPokedex),
    switchMap(() =>
      this.pokedexService.getPokedex().pipe(
        tap((response) => console.log(response)),
        map(response => loadPokedexSuccess({pokedex: response})),
        catchError((error) => {
          console.error(error)
          return of(loadPokedexError({message: 'Something went wrong fetching the pokedex. Please try again later.'}))
        })
      )
    )
  ))

  constructor(
    private actions$: Actions,
    private pokedexService: PokedexService
  ) {
  }
}
