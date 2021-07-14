import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, AuthService } from '@auth0/auth0-angular';
import { AuthBtnComponent } from './components/auth-btn/auth-btn.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginBtnComponent } from './components/login-btn/login-btn.component';
import { LogoutBtnComponent } from './components/logout-btn/logout-btn.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path:'', component: ErrorComponent
  },
  {
    path:'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path:'login', component: LoginBtnComponent
  },
  {
    path:'logout', component: LogoutBtnComponent, canActivate: [AuthGuard]
  },
  {
    path:'table', component: TableComponent, canActivate: [AuthGuard]
  },
  {
    path:'episode', component: EpisodeComponent, canActivate: [AuthGuard]
  },
  {
    path:'character/:id', component: CharacterDetailComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
