import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { ProductComponent } from './product/product.component';

import { HttpClientModule } from '@angular/common/http';
import { EventComponent } from './organisateur/event/event.component';
import { CircuitComponent } from './organisateur/circuit/circuit.component';
import { CategorieComponent } from './organisateur/categorie/categorie.component';
import { HebergementComponent } from './organisateur/hebergement/hebergement.component';
import { ArticlesComponent } from './articles/articles.component';
import { UsersComponent } from './Admin/users/users.component';
import { UserEventComponent } from './Admin/user-event/user-event.component';
import { ProductsComponent } from './Admin/products/products.component';
import { LoginService } from './login/services/login.service';
import { AuthGuardService } from './auth/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    EventsComponent,
    ProductComponent,
    EventComponent,
    CircuitComponent,
    CategorieComponent,
    HebergementComponent,
    ArticlesComponent,
    UsersComponent,
    UserEventComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
