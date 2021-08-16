import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Update } from "@ngrx/entity";
import { Store } from "@ngrx/store";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { of } from "rxjs";
import { catchError, exhaustMap, map, switchMap, tap } from "rxjs/operators";
import { AppState } from "../app.state";
import { setErrorMessage, } from "../store/Shared/shared.actions";
import { loginStart, loginSuccess, signupStart, signupSuccess, updateUser, updateUserSuccess } from "./auth.actions";
import { AuthService } from "./auth.service";
import { User } from "./user.model";

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
        return this.authService.login().pipe( //action.email, action.password
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

  updateUser$ = createEffect(():any => {
    return this.actions$.pipe(
      ofType(updateUser),
      switchMap((action) => {
        return this.authService.updateUser(action.user).pipe(
          map((data) => {
            const updatedUser: Update<User> = {
              id: action.user.id,
              changes: {
                ...action.user,
              },
            };
            return updateUserSuccess({ user: action.user });
          })
        );
      })
    );
  });

  userRedirect2$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[updateUserSuccess]),
        tap((action) => {
          this.router.navigate(['/']);
          this.toastr.success("Success");
        })
      );
    },
    { dispatch: false }
  );

  signupRedirect2$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[signupSuccess]),
        tap((action) => {
          this.router.navigate(['/login']);
          this.toastr.success("Signup Success");
        })
      );
    },
    { dispatch: false }
  );
}
