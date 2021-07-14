import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.css']
})
export class LogoutBtnComponent implements OnInit {

  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document){ }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout({ returnTo: this.doc.location.origin});
  }
}
