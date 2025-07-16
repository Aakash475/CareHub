import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { DoctorAuthService } from './doctorauth.service';

@Injectable({
    providedIn: 'root'
})

export class DoctorAuthGuardService implements CanActivate {
    constructor(
        private doctorAuthService: DoctorAuthService,
        private router: Router
    ) { }

    canActivate() {
        if(this.doctorAuthService.isUserLoggedIn()){
            return true;
        } else {
            this.router.navigate(['/doctorlogin'])
            return false;
        }
    }
}
