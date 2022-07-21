import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { NegateAuthGuard } from './guards/negate-auth/negate-auth.guard';

const routes: Routes = [
  {path:'', component:LoginComponent, canActivate:[NegateAuthGuard]},
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
