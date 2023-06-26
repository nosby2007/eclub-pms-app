import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Auth/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string = '';
  email: string = '';

  constructor(private router: Router, private auth: AuthentificationService) { }

  ngOnInit(): void {

  }

  login() {
    if (this.email == '') {
      alert('veuillez entrer votre email');
      return;
    }
    if (this.password == '') {
      alert('veuillez entrer votre mot de passe');
      return;
    }
    
    this.auth.login(this.email, this.password)

    this.email = '';
    this.password = '';
  }
}
