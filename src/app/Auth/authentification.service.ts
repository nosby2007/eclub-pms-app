import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private fireAuth:AngularFireAuth, private router: Router) { }
  //login methode
  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then(()=>{
      alert('bienvenue:' + ' '+ email)
      localStorage.setItem('token', 'true');
      this.router.navigate(['home']);
    }, (err: any) => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  //register method
  register(email: string, password: string){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('registration successfull')
      this.router.navigate(['/login'])
    }, (err:any) =>{
      alert(err.message);
      this.router.navigate(['/register'])
    })
  }
  //sign out 
  logout(name: string, firstname:string){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem('token');
      alert('merci pour votre visite' +name + 'a très bientôt')
      this.router.navigate(['/login']);
    }, (err:any)=>{
      alert(err.message);
    })
  }
}
