import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { LoginService } from '../login/services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private user: LoginService, private router: Router) {
  }

  canActivate( ){
    let user={
      'id':localStorage.getItem('idUser'),
      'token':localStorage.getItem('Token')
    }
    if(user.id && user.token)
    {
      return true;
    }
    this.router.navigate(['']);
    //console.log('you are note authentificate');
     return false;
  }

}
