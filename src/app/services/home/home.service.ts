import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { AuthenticationService } from '../authentication/authentication.service';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';

@Injectable()
export class HomeService {
    constructor(
        private authService: AuthenticationService,
        private subscriptions: SubscriptionsService,
        private router: Router
    ) {}

    goHome(): void {
        this.getHomeURL().subscribe(url => {
            this.router.navigate([url]);
        });
    }

    private getHomeURL(): Observable<string> {
        return combineLatest(
            this.authService.isAppUserARestaurant(),
            this.authService.getCurrentAppUser()
        )
            .map(([isRestaurant, currentUser]) => {
                if (isRestaurant) {
                    return '/restaurant-profile/' + currentUser.id;
                }
                return '/home';
            })
            .takeUntil(this.subscriptions.unsubscribe);
    }
}
