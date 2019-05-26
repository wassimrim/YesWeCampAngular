import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { ProductComponent } from './product/product.component';
import { EventComponent } from './organisateur/event/event.component';
import { CircuitComponent } from './organisateur/circuit/circuit.component';
import { CategorieComponent } from './organisateur/categorie/categorie.component';
import { HebergementComponent } from './organisateur/hebergement/hebergement.component';
import { ArticlesComponent } from './articles/articles.component';
import { UsersComponent } from './Admin/users/users.component';
import { UserEventComponent } from './Admin/user-event/user-event.component';
import { ProductsComponent } from './Admin/products/products.component';
//import { AuthGuardService } from './auth/auth-guard.service';
import { AuthGuard } from './guards/auth-guard.service';


const routes: Routes =[
    { path: 'home',         /*canActivate: [AuthGuard],  */ component: LandingComponent },
    { path: 'user-profile', /*  canActivate: [AuthGuardService], */ component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',       /*  canActivate: [AuthGuardService],*/ component: LandingComponent },
    { path: '',          component: LoginComponent },
    { path: 'admin/users',          component: UsersComponent },
    { path: 'admin/events',          component: UserEventComponent },
    { path: 'admin/products',          component: ProductsComponent },
    { path: 'user/events',          component: EventsComponent },
    { path: 'user/articles',          component: ArticlesComponent },
    { path: 'vendeur/product',          component: ProductComponent },
    { path: 'organisateur/event',          component: EventComponent },
    { path: 'organisateur/circuit',          component: CircuitComponent },
    { path: 'organisateur/categorie',          component: CategorieComponent },
    { path: 'organisateur/hebergement',          component: HebergementComponent },
   // { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
