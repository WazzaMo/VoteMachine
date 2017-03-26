import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserGuardService implements CanActivate {
    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.debug("Attempted to route to: " + route.pathFromRoot);
        if (this.authService.isSignedIn()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}