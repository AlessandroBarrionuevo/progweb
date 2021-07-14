import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@auth0/auth0-angular';
import { LoginBtnComponent } from './login-btn.component';

describe('LoginBtnComponent', () => {
  let component: LoginBtnComponent;
  let fixture: ComponentFixture<LoginBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginBtnComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //verifico el h1
  it('verifico '), () => {
    const titulo = fixture.debugElement.nativeElement.querySelector('h1')
    expect(titulo.textContent).toContain('Bienvenido')
  }

});
