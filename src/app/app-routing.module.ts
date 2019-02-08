import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { CatalogsComponent } from './pages/catalogs/catalogs.component';
import { FlyersComponent } from './pages/flyers/flyers.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard], },
  { path: 'catalogs', component: CatalogsComponent, canActivate: [AuthGuard], },
  { path: 'flyers', component: FlyersComponent, canActivate: [AuthGuard], },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
