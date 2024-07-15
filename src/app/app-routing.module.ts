import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AProposComponent } from './page/a-propos/a-propos.component';
import { NosServicesComponent } from './page/nos-services/nos-services.component';
import { NousContacterComponent } from './page/nous-contacter/nous-contacter.component';
import { LoginComponent } from './sharePage/login/login.component';
import { LogOutComponent } from './sharePage/log-out/log-out.component';
import { RegisterComponent } from './sharePage/register/register.component';
import { AuthGuard } from './Auth/authguard.guard';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'home' , component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'apropos' , component: AProposComponent,canActivate:[AuthGuard]},
  {path: 'service' , component: NosServicesComponent,canActivate:[AuthGuard]},
  {path: 'contact' , component: NousContacterComponent,canActivate:[AuthGuard]},
  {path: 'login' , component: LoginComponent},
  {path: 'signOut' , component: LogOutComponent},
  {path: 'register' , component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
