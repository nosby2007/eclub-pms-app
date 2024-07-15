import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  title = 'ECLUB-PMS-APP';
  today = new Date();
  jstoday = '';
  loggedInUser: any;
  user!: number;
  mynumber: any;
  constructor(private router: Router, private auth:AngularFireAuth) {
    this.jstoday = formatDate(this.today, 'MMM dd, yyyy , hh:mm:ss a', 'en-US');
    this.mynumber = +4787870612;
  }
  ngOnInit(): void {
     this.loggedInUser = sessionStorage.getItem('user');
  }
  logout() {
    this.auth.signOut().then(()=>{
      alert('Merci de votre visite au besoin, nous écrire à l\'\adresse nosby2007@gmail.com')
      this.loggedInUser = null;
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, (err:any)=>{
      alert(err.message);
    })  

  }
}