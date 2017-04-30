import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../+auth/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private authService: AuthService) { }

    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.router.navigate(['/sign-in']);
        return false;
    }
}
