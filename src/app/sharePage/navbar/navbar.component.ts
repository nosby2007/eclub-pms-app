import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  title = 'soeurette-managment';
  today = new Date();
  jstoday = '';
  loggedInUser: any;
  user!: number;
  mynumber: any;
  constructor(private router: Router) {
    this.jstoday = formatDate(this.today, 'MMM dd, yyyy , hh:mm:ss a', 'en-US');
    this.mynumber = +911234567890;
  }
  ngOnInit(): void {
     this.loggedInUser = sessionStorage.getItem('user');
  }
  logout() {
    this.loggedInUser = null;
    this.router.navigate(['login']);
  }
}