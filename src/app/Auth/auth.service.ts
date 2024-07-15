import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth:AngularFireAuth, private router: Router) { }
  //login methode
  login(email: string, password: string, name:string, firstname: string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then(()=>{
      alert('bienvenue:' + ' '+ email)
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home']); 
    }, (err: any) => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }
  isLoggedIn(){
    return localStorage.getItem('token')!=null
  }

  haveAccess(){
    var loggintoken = localStorage.getItem('token')||'';
    var _extractedtoken = loggintoken.split('.')[1];
    var _atobdata=atob(_extractedtoken);
    var _finaldata= JSON.parse(_atobdata);
    if(_finaldata.role=='admin'){
      return true;
    }else{
      return false;
    }
    

  }


  //register method
  register(email: string, password: string){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Merci de faire partie de notre maison')
      this.router.navigate(['/login'])
    }, (err:any) =>{
      alert(err.message);
      this.router.navigate(['/register'])
    })
  }

  logout(){
    this.fireAuth.signOut().then(()=>{
      alert('Merci de votre visite au besoin, nous écrire à l\'\adresse nosby2007@gmail.com')
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, (err:any)=>{
      alert(err.message);
    })
  }
}