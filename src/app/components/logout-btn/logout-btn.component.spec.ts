import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule, AuthService } from '@auth0/auth0-angular';

import { LogoutBtnComponent } from './logout-btn.component';

describe('LogoutBtnComponent', () => {
  let component: LogoutBtnComponent;
  let fixture: ComponentFixture<LogoutBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[AuthService],
      imports:[  AuthModule.forRoot({
        domain:"segundoparcialangular.us.auth0.com"
        ,clientId: "pyNzHuIFNG9FFmIfkM215NJ0lFtUjORr"
      })],
      declarations: [ LogoutBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
