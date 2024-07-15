import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { auth } from 'firebase-admin';
import { Auth } from 'firebase-admin/lib/auth/auth';
import { AuthService } from 'src/app/Auth/auth.service';
import { AuthentificationService } from 'src/app/Auth/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string = '';
  email: string = '';
  name: string='';
  firstName:string='';
  loggedInUser!: null;

  constructor(private router: Router, private auth: AuthService, private auths:AngularFireAuth) { }

  ngOnInit(): void {

  }

  login() {
    if (this.name == '') {
      alert('veuillez entrer votre nom');
      return;
    }
    if (this.firstName == '') {
      alert('veuillez entrer votre prénom');
      return;
    }
    if (this.email == '') {
      alert('veuillez entrer votre email');
      return;
    }
    if (this.password == '') {
      alert('veuillez entrer votre mot de passe');
      return;
    }
    
    this.auth.login(this.email, this.password, this.name, this.firstName)

    this.email = '';
    this.password = '';
    this.name = '';
    this.firstName = '';
  }

  
}
