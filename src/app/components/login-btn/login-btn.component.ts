import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.css']
})
export class LoginBtnComponent implements OnInit {
  
  constructor(public autho: AuthService) { }

  ngOnInit(): void {
  }

  //redirect de auth atravez de nuestro modulo
  loginWithRedirect() {
    this.autho.loginWithRedirect();
  }

}
