import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthModule, AuthService } from '@auth0/auth0-angular';

import { AuthBtnComponent } from './auth-btn.component';

describe('AuthBtnComponent', () => {
  let component: AuthBtnComponent;
  let fixture: ComponentFixture<AuthBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[AuthService],
      imports:[ AuthModule.forRoot({
        domain:"segundoparcialangular.us.auth0.com"
        ,clientId: "pyNzHuIFNG9FFmIfkM215NJ0lFtUjORr"
      })],
      declarations: [ AuthBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  
});
