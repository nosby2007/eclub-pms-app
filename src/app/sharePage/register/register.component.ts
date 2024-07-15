import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/Auth/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit { 
  constructor(private auth:AuthentificationService){}
email:string = '';
password: string = '';
firstName:string='';
name: string='';

ngOnInit(): void {
}
register() {
  if(this.name==''){
   alert('entrez votre nom')
   return;
  }
  console.log(this.name);

  if(this.firstName==''){
   alert('entrez votre prénom')
   return;
  }
  console.log(this.firstName);
  if(this.email ==''){
   alert('entrez votre email');
   
   
   return;
  }
  console.log(this.email);

  if(this.password==''){
   alert('entrez votre mot de pass')
   return;
  }
  console.log(this.password);
  

  this.auth.register(this.email, this.password);

  this.email= '';
  this.password='';
  this.firstName='';
  this.name='';
 }

}
