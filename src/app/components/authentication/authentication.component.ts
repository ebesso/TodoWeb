import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  
  constructor(private socialAuthService: SocialAuthService) {
    this.user = new SocialUser();
    this.loggedIn = false;
  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (this.user != null)
    })
  }
  login(): void{
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {})
  }
  logout (): void{
    this.socialAuthService.signOut(true);
  }

}
