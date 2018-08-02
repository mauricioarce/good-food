import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuardService } from './services/authentication/authentication-guard.service';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantProfileComponent } from './components/restaurant-profile/restaurant-profile.component';
import { RestaurantsMapComponent } from './components/restaurants-map/restaurants-map.component';
import { RegisterMyRestaurantComponent } from './components/register-my-restaurant/register-my-restaurant.component';
import { RestaurantMenuComponent } from './components/restaurant-menu/restaurant-menu.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { UserWallComponent } from './components/user-wall/user-wall.component';
import { ChatRoomsComponent } from './components/chat-rooms/chat-rooms.component';
import { InternalGuard } from './services/authentication/internal.guard';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { OfflineComponent } from './components/offline/offline.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthenticationGuardService]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthenticationGuardService]
    },
    {
        path: '',
        component: MenuComponent,
        canActivate: [AuthenticationGuardService],
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent,
                canActivate: [InternalGuard]
            },
            {
                path: 'restaurant-profile/:id',
                component: RestaurantProfileComponent
            },
            {
                path: 'restaurants-map',
                component: RestaurantsMapComponent,
                canActivate: [InternalGuard]
            },
            {
                path: 'register-my-restaurant',
                component: RegisterMyRestaurantComponent,
                canActivate: [InternalGuard]
            },
            {
                path: 'restaurant-menu/:id',
                component: RestaurantMenuComponent
            },
            {
                path: 'home-feed',
                component: UserWallComponent,
                canActivate: [InternalGuard]
            },
            {
                path: 'messages',
                component: ChatRoomsComponent
            },
            {
                path: 'search',
                component: AdvancedSearchComponent,
                canActivate: [InternalGuard]
            }
        ]
    },
    {
        path: 'offline',
        component: OfflineComponent,
        // canActivate: [AuthenticationGuardService]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
