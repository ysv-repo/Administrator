import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { storageService } from './storageService';

@Injectable({ providedIn: 'root' })
export class CanActivateService implements CanActivate {
    flag: boolean = false

    constructor(
        private route: Router,
        private storage: storageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('**********', this.storage.getSessionItem('loginFlg'));
        // return true
        if (this.storage.getSessionItem('loginFlg') == 'true') {
            return true
        }
        else {
            this.route.navigateByUrl('/PageNotFound')
            return false
        }
    }
}
