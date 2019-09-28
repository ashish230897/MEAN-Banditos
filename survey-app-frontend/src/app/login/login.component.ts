import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  ourUser = {};
  
  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
    if(sessionStorage.getItem('user')) {
      this.setUserSession(this.user);
      this.router.navigate(["/dashboard"]);
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => {
      console.log(x);
      if(this.user) {
        this.ourUser = {
          name: this.user.name,
          email: this.user.email,
          photoUrl: this.user.photoUrl
        }
        this.setUserSession(this.user);
        this.router.navigate(["/dashboard"]);
      }
    });
  }

  signOut(): void {
    this.removeUserSession();
    this.authService.signOut();
  }

  setUserSession(user) : void {
    sessionStorage.setItem('name', user.name);
    sessionStorage.setItem('email', user.email);
    sessionStorage.setItem('photoUrl', user.photoUrl);
  }

  removeUserSession() : void {
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('photoUrl');
  }

}
