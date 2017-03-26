import { Injectable } from '@angular/core';

import {
  AngularFire,
  AuthProviders,
  AuthMethods,
  FirebaseListObservable,
  FirebaseAuthState
} from 'angularfire2';

@Injectable()
export class AuthenticationService {
  private authState: FirebaseAuthState;

  constructor(private firebase: AngularFire) {
    this.firebase.auth.subscribe(auth => { 
      if(auth) {
        this.authState = auth;
      }
    });
  }

  public isSignedIn() : boolean {
    if (this.authState) {
      return this.authState.auth !== undefined;
    }
    return false;
  }

  public login(thenHandler ?: Function, errorHandler ?: (error:Error)=>void) : void {
    let doNext: Function;
    let doError: (error:Error) => void;

    doNext = thenHandler === undefined ? () => {} : thenHandler;
    doError = errorHandler === undefined ? e => {} : errorHandler;

    this.firebase.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    })
    .then(auth => doNext())
    .catch(doError);
  }

  public logout() : void {
    this.firebase.auth.logout().then(()=> this.authState.auth = undefined);
  }

  public getName() : string {
    return this.isSignedIn() ? this.authState.auth.displayName : 'Not Signed In';
  }
}
