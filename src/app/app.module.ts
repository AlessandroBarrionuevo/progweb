import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { environment as envir } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginBtnComponent } from './components/login-btn/login-btn.component';
import { LogoutBtnComponent } from './components/logout-btn/logout-btn.component';
import { HomeComponent } from './components/home/home.component';
import { AuthBtnComponent } from './components/auth-btn/auth-btn.component';
import { TableComponent } from './components/table/table.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginBtnComponent,
    LogoutBtnComponent,
    HomeComponent,
    AuthBtnComponent,
    TableComponent,
    EpisodeComponent,
    CharacterDetailComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({ 
    ...envir.auth
    }),
    NgbModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
