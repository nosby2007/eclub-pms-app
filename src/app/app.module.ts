import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { AProposComponent } from './page/a-propos/a-propos.component';
import { NosServicesComponent } from './page/nos-services/nos-services.component';
import { NousContacterComponent } from './page/nous-contacter/nous-contacter.component';
import { EtudiantsComponent } from './service/etudiants/etudiants.component';
import { ProfessionelsComponent } from './service/professionels/professionels.component';
import { EmployeursComponent } from './service/employeurs/employeurs.component';
import { NavbarComponent } from './sharePage/navbar/navbar.component';
import { LoginComponent } from './sharePage/login/login.component';
import { RegisterComponent } from './sharePage/register/register.component';
import { FooterComponent } from './sharePage/footer/footer.component';
import { LogOutComponent } from './sharePage/log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AProposComponent,
    NosServicesComponent,
    NousContacterComponent,
    EtudiantsComponent,
    ProfessionelsComponent,
    EmployeursComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
