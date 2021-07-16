import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthClientConfig, AuthConfigService, AuthModule, AuthService } from '@auth0/auth0-angular';
import { LoginBtnComponent } from './login-btn.component';
import { HttpClientTestingModule} from '@angular/common/http/testing'
//import { Auth0ClientFactory, Auth0ClientService } from '@auth0/auth0-angular/lib/auth.client';
import { config } from 'process';

describe('LoginBtnComponent', () => {
  let component: LoginBtnComponent;
  let fixture: ComponentFixture<LoginBtnComponent>;
  let auths: AuthService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[AuthService],
      declarations: [LoginBtnComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, AuthModule.forRoot({
        domain:"segundoparcialangular.us.auth0.com"
        ,clientId: "pyNzHuIFNG9FFmIfkM215NJ0lFtUjORr"
      })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
      
    }).compileComponents();
  });

  /*
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[AuthService],
      declarations: [LoginBtnComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, AuthModule.forRoot() ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
      
    }).compileComponents();
  });
 */
  beforeEach(() => {
    
    fixture = TestBed.createComponent(LoginBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create comp', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  //verifico el h1
  /*it('verifico '), () => {
    const titulo = fixture.debugElement.nativeElement.querySelector('h1')
    expect(titulo.textContent).toContain('Bienvenido')
  }-*/


});
