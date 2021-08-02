import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { of } from "rxjs";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { AppState } from "../app.state";
import { setErrorMessage, } from "../store/Shared/shared.actions";
import { loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.actions";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
    private toastr: ToastrService
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data:any) => {
            // this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));
            const user = this.authService.formatUser(data);
            this.authService.setUserInLocalStorage(user);
            return loginSuccess({ user, redirect: true });
          }),
          catchError((errResp) => {
            //this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.authService.getErrorMessage(
              errResp.error.error.message
            );
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[loginSuccess]),
        tap((action) => {
          this.store.dispatch(setErrorMessage({ message: '' }));
          if (action.redirect) {
            this.toastr.success('Login Success');
            this.router.navigate(['/']);
            
          }else{
            this.toastr.error('Login Failed');
          }
        })
      );
    },
    { dispatch: false }
  );

  signupRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[signupSuccess]),
        tap((action) => {
          // this.store.dispatch(setErrorMessage({ message: '' }));
          // if (action.redirect) {
          //   this.toastr.success('Success');
          //   this.router.navigate(['/']);
            
          // }else{
          //   this.toastr.error('Failed');
          // }
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );

  signUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signupStart),
      exhaustMap((action) => {
        return this.authService.signUp(action.firstname, 
          action.lastname, 
          action.contact,
          action.email, 
          action.password,
          action.retype_password).pipe(
          map((data:any) => {
            //this.store.dispatch(setLoadingSpinner({ status: false }));
            const user = this.authService.formatUser(data);
            this.authService.setUserInLocalStorage(user);
            return signupSuccess({ user });
          }),
          // catchError((errResp) => {
          //  // this.store.dispatch(setLoadingSpinner({ status: false }));
          //   const errorMessage = this.authService.getErrorMessage(
          //     errResp.error.error.message
          //   );
          //   return of(setErrorMessage({ message: errorMessage }));
          // })
        );
      })
    );
  });
}
