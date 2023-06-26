import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthentificationService } from './authentification.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private route:Router){
    
  }
  canActivate() {
    if(this.auth.isLoggedIn()){
      return true;
    }
    else{
      this.route.navigate(['login'])
      return false;
    }
    
  }
  
}
